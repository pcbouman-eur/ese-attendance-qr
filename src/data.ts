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
  