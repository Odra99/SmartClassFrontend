import { Area } from "./area";

export class Classroom{
    public id !:number;
    public name!:string;
    public space_capacity!:string;
    public class_schedule!:ClassroomSchedule[];
}

export class ClassroomSchedule{
    public id !:number;
    public start_time!:string;
    public end_time!:string;
    public teacher!:Classroom;
    public area!:Area;
}