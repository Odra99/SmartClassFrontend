import { Area } from "./area";

export class Teacher{
    public id !: number;
    public name !:string;
    public teacher_schedule!:TeacherSchedule[];
    
}

export class TeacherSchedule{
    public id !:number;
    public start_time!:string;
    public end_time!:string;
    public teacher!:Teacher;
    public area!:Area;
}