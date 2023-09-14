import { Area } from "./area";

export class Course {
    public id !: number;
    public name!: string;
    public code!: string;
    public semester!: number;
    public no_periods!: number;
    public mandatory!: boolean;
    public course_schedule!: CourseSchedule[];
}

export class CourseSchedule {
    public id !: number;
    public start_time!: string;
    public end_time!: string;
    public course!: Course;
    public area!: Area;
}