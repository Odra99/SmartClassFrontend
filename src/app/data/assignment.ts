import { Classroom } from "./class";
import { Course } from "./course";
import { Teacher } from "./teacher";

export class Assignment{
    public id!:number;
    public course!:Course;
    public teacher!:Teacher;
    public class!:Classroom;
    public start_time!:string;
    public end_time!:string;
    public no_students!:number;
    public section!:string;

}

export class CourseAssignment{
    public code!:string;
    public no_students!:number;
}