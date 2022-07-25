import { Session, Group, ScheduleData } from './data';
import { read, Sheet, utils, WorkBook } from "xlsx";

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);

export function retrieveData(url='timetable.xlsx'): Promise<ScheduleData> {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";
        req.onload = () => {
            const data = new Uint8Array(req.response);
            const workbook = read(data, {type:"array", cellDates: true});
            resolve(workbookToData(workbook));
        }
        req.onerror = () => reject();
        req.send()
    });
}

export function dataFromArrayBuffer(buffer: ArrayBuffer): ScheduleData {
    const workBook = read(buffer, {type:"array", cellDates: true});
    return workbookToData(workBook);
}

export function workbookToData(workbook: WorkBook): ScheduleData {
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const records = processSheet(firstSheet);
    const sessions = records.map(recordToSession);
    const courseNames = [...new Set(records.map(rec => rec['Description'] + ' ('+rec['Course code']+')'))]
    return {
        courseNames,
        sessions
    };
}

export function groupSessionsNested(sessions: Session[]): Map<string, Map<string, Session[]>> {
    const result = new Map();
    const map1 = groupSessionsByCourseCode(sessions);
    for (const [key, value] of map1.entries()) {
        result.set(key, groupSessionsByGroup(value));
    }
    return result;
}

export function groupSessionsByGroup(sessions: Session[]): Map<string, Session[]> {
    return groupSessions(sessions, ses => ses.group.name);
}

export function groupSessionsByCourseCode(sessions: Session[]): Map<string, Session[]> {
    return groupSessions(sessions, ses => ses.courseCode);
}

export function groupSessions(sessions: Session[], keyFunc: (session: Session) => string ): Map<string, Session[]> {
    const result = new Map();
    for (const session of sessions) {
         const key = keyFunc(session);
         if (result.has(key)) {
             result.get(key).push(session);
         }
         else {
             result.set(key, [session]);
         }
    }
    for (const sesList of result.values()) {
        sortSessions(sesList);
    }
    return result;
}


interface sheet_header {
    [key: number]: string;
}

interface sheet_record {
    // eslint-disable-next-line
    [key: string]: any;
}

function recordToSession(sheet_record: sheet_record, id: number): Session {
    const courseCode = sheet_record['Course code'];
    const start = sheet_record['Start'];
    const end = sheet_record['End'];
    const timeSlot = {
        start, end
    }
    const isEnglish = courseCode.endsWith('X') || courseCode.endsWith('S');
    const group = parseGroup(sheet_record['Group'], courseCode);
    return {
        timeSlot,
        location: sheet_record['Location(s)'],
        id,
        type: sheet_record['Type'],
        group,
        courseCode,
        courseName: sheet_record['Description']
    }
}

function parseGroup(raw_input: string, courseCode: string, stripPrefix='Group '): Group {
    const input = raw_input.replace(stripPrefix, '');
    if (input === 'Plenary') {
        return {
            groupType: input,
            plenary: true,
            name: input
        }
    }

    const groupTypeMatch = input.match(/^[A-Za-z]+/);
    const groupNumberMatch = input.match(/[0-9]+$/);
    if (groupTypeMatch && groupNumberMatch) {
        return {
            name: input,
            groupType: groupTypeMatch[0],
            plenary: false
        }
    }
    const postFixMatch = courseCode.match(/[A-Za-z]$/)
    return {
        name: input + (postFixMatch ? ('-' + postFixMatch[0]) : ''),
        groupType: input + (postFixMatch ? ('-' + postFixMatch[0]) : ''),
        plenary: false
    }
}

function processSheet(sheet: Sheet): sheet_record[] {
    const raw_range = sheet['!ref'];
    if (!raw_range) {
        throw 'Invalid Spreadsheet';
    }
    const range = utils.decode_range(raw_range);
    let first_row = true;
    const result: sheet_record[] = [];
    const header: sheet_header = {};
    for (let row = range.s.r; row <= range.e.r; row++) {
        const record: sheet_record = {};
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

export function sortSessions(sessions: Session[]): void {
    sessions.sort(compareSessions);
}

export function compareSessions(ses1: Session, ses2: Session): number {
    const start1 = new Date(ses1.timeSlot.start);
    const start2 = new Date(ses2.timeSlot.start);
    const startDiff = start1.getTime() - start2.getTime();
    if (startDiff !== 0) {
        return startDiff;
    }
    const end1 = new Date(ses1.timeSlot.end);
    const end2 = new Date(ses2.timeSlot.end);
    return end1.getTime() - end2.getTime();
}