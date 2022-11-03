import { SheetRecord, SheetHeader, AttendanceRecord, Group } from './data';
import { read, Sheet, utils } from "xlsx";
import { groupSessions, parseGroup, sortMap } from './utils';

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);
dayjs.extend(weekday);

export function dataFromArrayBuffer(buffer: ArrayBuffer): any {
    const workBook = read(buffer, {type:"array", cellDates: true});
    const first = workBook.SheetNames[0];
    const data = sheetToData(workBook.Sheets[first], [], 1).map(recToAttRecord);
    const statistics = basicStatistics(data, false);
    const sessionStatistics = getSessionStatistics(data);
    const tutorialStatistics = getTutorialStatistics(data);
    const heatMaps = getCourseHeatMaps(data);
    return {data, statistics, sessionStatistics, tutorialStatistics, heatMaps}; 
}

export function sheetToData(sheet: Sheet, columns: String[], skip_rows: number): SheetRecord[] {
    const raw_range = sheet['!ref'];
    if (!raw_range) {
        throw 'Invalid Spreadsheet';
    }
    const range = utils.decode_range(raw_range);
    let first_row = true;
    const result: SheetRecord[] = [];
    const header: SheetHeader = {};
    let row_index = 0;
    for (let row = range.s.r; row <= range.e.r; row++) {
        if (!first_row && row_index++ < skip_rows) {
            continue;
        }
        const record: SheetRecord = {};
        for (let col = range.s.c; col <= range.e.c; col++) {
            const cell_address = utils.encode_cell({r: row, c: col});
            const cell = sheet[cell_address];
            if (!cell) {
                continue;
            }
            if (first_row) {
                header[col] = cell.v;
            }
            else {
                const field = header[col];
                record[field] = cell.v
            }
        }
        if (!first_row) {
            result.push(record)
        }
        else {
            first_row = false;
        }
    }
    return result;
}

export function recToAttRecord(record: SheetRecord): AttendanceRecord {
    return {
        startDate: record['StartDate'],
        endDate: record['EndDate'],
        sessionDate: dayjs(record['Q10'], 'M/D/YYYY, H:m:s A').toDate(),
        finished: record['Finished'] == 'True',
        courseCode: record['Q8'],
        courseName: record['Q9'],
        group: parseGroup(record['Q11'], record['Q8']),
        sessionIndex: record['Q12'],
        sessionId: record['Q13'],
        location: record['Q14'],
        studentNumber: record['QID1']
    };
}

export function basicStatistics(records: AttendanceRecord[], includeUnfinished: boolean): CourseStats[] {
    const map = new Map<String, CourseStats>();
    for (const rec of records) {
        const course = rec.courseCode;
        let stats = map.get(course);
        if (!stats) {
            stats = new CourseStats(course);
            map.set(course, stats);
        }
        if (!rec.finished) {
            stats.incrementUnfinished();
            if (!includeUnfinished) {
                continue;
            }
        }
        else {
            stats.incrementFinished();
        }
        const drift = (rec.startDate.getTime() - rec.sessionDate.getTime()) / 1000;
        if (!Number.isNaN(drift)) {
            stats.addDrift(drift);
        }
    }
    return [...map.values()];
}

export function getSessionStatistics(records: AttendanceRecord[]): Map<String,Map<String,Map<number,SessionAttendanceStatistics>>> {
    const result: Map<String,Map<String,Map<number,SessionAttendanceStatistics>>> = new Map();
    for (const rec of records) {
        let courseMap = result.get(rec.courseCode);
        if (!courseMap) {
            courseMap = new Map();
            result.set(rec.courseCode, courseMap);
        }
        const group = rec.group.name;
        let groupMap = courseMap.get(group);
        if (!groupMap) {
            groupMap = new Map();
            courseMap.set(group, groupMap);
        }
        let sas = groupMap.get(rec.sessionIndex);
        if (!sas)
        {
            sas = new SessionAttendanceStatistics(rec.courseCode, rec.group, rec.sessionIndex);
            groupMap.set(rec.sessionIndex, sas);
        }
        sas.addRecord(rec);
    }
    return sortMap(result);
}

export function getTutorialStatistics(records: AttendanceRecord[]): Map<String,Map<number,TutorialAttendanceStatistics>> {
    const result: Map<String,Map<number,TutorialAttendanceStatistics>> = new Map();
    for (const rec of records) {
        let courseMap = result.get(rec.courseCode);
        if (!courseMap) {
            courseMap = new Map();
            result.set(rec.courseCode, courseMap);
        }
        let tas = courseMap.get(rec.sessionIndex);
        if (!tas) {
            tas = new TutorialAttendanceStatistics(rec.courseCode, rec.sessionIndex);
            courseMap.set(rec.sessionIndex, tas);
        }
        tas.addRecord(rec);
    }
    return sortMap(result);
}

export function getCourseHeatMaps(records: AttendanceRecord[], unfinished:boolean = false): Map<String, heatmap> {
    const courses = new Set(records.map(rec => rec.courseCode));
    const maps: Map<String,HeatMap> = new Map();
    for (const course of [...courses].sort()) {
        const hm = new HeatMap();
        maps.set(course, hm);
    }
    for (const rec of records) {
        if (!unfinished && !rec.finished) {
            continue;
        }
        maps.get(rec.courseCode)?.addRecord(rec);
    }
    const result = new Map();
    for (const [courseCode, hm] of maps.entries()) {
        result.set(courseCode, hm.getMap());
    }
    return result;
}

class CourseStats {
    private course: String;
    private unfinished: number;
    private finished: number;
    private drifts: number[];

    public constructor(course: String) {
        this.course = course;
        this.unfinished = 0;
        this.finished = 0;
        this.drifts = [];
    }

    public getCourse() {
        return this.course;
    }

    public getFinished() {
        return this.finished;
    }

    public getUnfinished() {
        return this.unfinished
    }

    public getAverageDrift() {
        return this.drifts.reduce((acc, num) => acc + num, 0) / this.drifts.length;
    }


    public incrementUnfinished() {
        this.unfinished++;
    }

    public incrementFinished() {
        this.finished++;
    }
    
    public addDrift(drift: number) {
        this.drifts.push(drift);
    }
}

class SessionAttendanceStatistics {
    private courseCode: String;
    private group: Group;
    private sessionIndex: number;
    private records: AttendanceRecord[];

    public constructor (courseCode: String, group: Group, sessionIndex: number) {
        this.courseCode = courseCode;
        this.group = group;
        this.sessionIndex = sessionIndex;
        this.records = [];
    }

    public addRecord(record: AttendanceRecord) {
        this.records.push(record);
    }

    public addRecords(records: AttendanceRecord[]) {
        records.forEach(this.addRecord);
    }

    public countParticipants(unique:boolean=true, unfinished:boolean=false): number {
        if (unique) {
            const ids:Set<number> = new Set();
            for (const rec of this.records) {
                if (unfinished || !rec.finished) {
                    continue;
                }
                if (rec.studentNumber) {
                    ids.add(rec.studentNumber);
                }
            }
            return ids.size;
        }
        else {
            return this.records.filter(r => (unfinished || r.finished) && r.studentNumber).length;
        }
    }

    public get repeatCounts(): RepeatCount[] {
        const counts: Map<number,number> = new Map();
        for (const rec of this.records) {
            const stdNo = rec.studentNumber;
            if (stdNo) {
                const count = counts.get(stdNo);
                if (count) {
                    counts.set(stdNo, count+1);
                }
                else {
                    counts.set(stdNo, 1);
                }
            }
        }
        const hist: Map<number,number> = new Map();
        let maxRepeats = 0;
        for (const [_,repeats] of counts.entries()) {
            const old = hist.get(repeats);
            if (old) {
                hist.set(repeats, old+1);
            }
            else {
                hist.set(repeats, 1);
            }
            maxRepeats = Math.max(maxRepeats, repeats);
        }

        const result: RepeatCount[] = [];
        for (let r=2; r <= maxRepeats; r++) {
            let count = hist.get(r);
            if (!count) {
                count = 0;
            }
            result.push(new RepeatCount(r, count));
        }

        return result;
    }
}

class TutorialAttendanceStatistics {
    private courseCode: String;
    private sessionIndex: number;
    private records: AttendanceRecord[];

    constructor (courseCode: String, sessionIndex: number) {
        this.courseCode = courseCode;
        this.sessionIndex = sessionIndex;
        this.records = [];
    }

    public addRecord(rec: AttendanceRecord) {
        this.records.push(rec);
    }

    public getUniqueStudents(unfinished:boolean = false) {
        const ids: Set<number> = new Set();
        for (const rec of this.records) {
            if (!unfinished && !rec.finished) {
                continue;
            }
            if (rec.studentNumber) {
                ids.add(rec.studentNumber);
            }
        }
        return ids.size;
    }

    public get repeatCounts(): RepeatCount[] {
        const counts: Map<number,Set<String>> = new Map();
        for (const rec of this.records) {
            const stdNo = rec.studentNumber;
            if (stdNo) {
                let sesSet = counts.get(stdNo);
                if (!sesSet) {
                    sesSet = new Set();
                    counts.set(stdNo, sesSet);
                }
                sesSet.add(`${rec.group.name} / ${rec.sessionId}`);
            }
        }
        const hist: Map<number,number> = new Map();
        let maxRepeats = 0;
        for (const [_,sesSet] of counts.entries()) {
            const repeats = sesSet.size;
            const old = hist.get(repeats);
            if (old) {
                hist.set(repeats, old+1);
            }
            else {
                hist.set(repeats, 1);
            }
            maxRepeats = Math.max(maxRepeats, repeats);
        }

        const result: RepeatCount[] = [];
        for (let r=2; r <= maxRepeats; r++) {
            let count = hist.get(r);
            if (!count) {
                count = 0;
            }
            result.push(new RepeatCount(r, count));
        }

        return result;
    }

}

export class RepeatCount {
    private repeats: number;
    private count: number;

    constructor (repeats: number, count: number) {
        this.repeats = repeats;
        this.count = count;
    }

    getRepeats(): number {
        return this.repeats;
    }

    getCount(): number {
        return this.count;
    }
}

class HeatMap {
    private data: AttendanceRecord[];

    constructor () {
        this.data = [];
    }

    public addRecord(rec: AttendanceRecord) {
        this.data.push(rec)
    }

    public getMap(unfinished:boolean = false): heatmap {
        const map: Map<String,Map<number,number>> = new Map();
        const weeklySlots: Set<String> = new Set();
        const weeks: Set<number> = new Set();
        for (const rec of this.data) {
            if (!unfinished && !rec.finished) {
                continue;
            }
            const weeklySlot = recToWeeklySlot(rec);
            const week = recToWeek(rec);
            if (week == null || weeklySlot.includes('NaN')) {
                continue;
            }
            let sub = map.get(weeklySlot);
            if (!sub) {
                sub = new Map();
                map.set(weeklySlot, sub);
            }
            const count = sub.get(week);
            if (!count) {
                sub.set(week, 1);
            }
            else {
                sub.set(week, count+1);
            }
            weeklySlots.add(weeklySlot);
            weeks.add(week);
        }
        return {
            heatmap: map,
            weeks: [...weeks].sort(),
            weeklySlots: [...weeklySlots].sort()
        };
    }
}

interface heatmap {
    heatmap: Map<String, Map<number, number>>;
    weeks: number[];
    weeklySlots: String[];
}

function recToWeek(rec: AttendanceRecord): number {
    const date = rec.sessionDate;
    const dateObj = dayjs(date);
    return dateObj.week();
}

function recToWeeklySlot(rec: AttendanceRecord): String {
    const date = rec.sessionDate;
    const dateObj = dayjs(date);
    const hour = (dateObj.hour() < 10 ? '0' : '') + dateObj.hour(); 
    const minute = (dateObj.minute() < 10 ? '0' : '') + dateObj.minute();
    return `${dateObj.weekday()} / ${hour}:${minute}`;
}