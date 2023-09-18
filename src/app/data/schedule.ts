import { Area } from "./area";
import { Assignment, CourseAssignment } from "./assignment"
import { Classroom } from "./class"
import { Course } from "./course"
import { Priority } from "./priorities";
import { Restriction } from "./restrictions";
import { Teacher } from "./teacher"


export class Schedule{
    public id!:number
    public parent_id!:number
    public date!:string
    public priority_criterias!:Priority[]
    public classes_configurations!:Classroom[]
    public courses!:Course[]
    public restrictions!:Restriction[]
    public areas!:Area[]
    public area_configurations!:AreaConfiguration[]
    public teachers!:Teacher[]
    public assignments!:Assignment[]
    public version!:string
    public efficiency!:number
    public matrixAssingments!:any[]
    public course_assignment!:CourseAssignment[]
}

export class AreaConfiguration {
    public area_name!:string
    public start_time!:string
    public end_time!:string
    public order!:number    
}
