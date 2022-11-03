export interface Timeslot {
    start: Date;
    end: Date;
  }
  
export interface Group {
    groupType: string;
    name: string;
    plenary: boolean;
  }
  
export interface Session {
    timeSlot: Timeslot;
    location: string;
    id: number;
    type: string;
    group: Group;
    courseCode: string;
    courseName: string;
  }

export interface ScheduleData {
    courseNames: string[];
    sessions: Session[];
  }
  
  
export interface SheetHeader {
  [key: number]: string;
}

export interface SheetRecord {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface AttendanceRecord {
  startDate: Date;
  endDate: Date;
  finished: boolean;
  courseCode: String;
  courseName: String;
  sessionDate: Date;
  group: Group;
  sessionIndex: number;
  sessionId: number;
  location: String;
  studentNumber?: number;
}