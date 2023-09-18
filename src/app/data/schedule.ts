import { Area } from "./area";
import { Assignment } from "./assignment"
import { Classroom } from "./class"
import { Course } from "./course"
import { Teacher } from "./teacher"

export class ScheduleRestrictions {
    public id!:number;
    public type!:number;
    public name!:string;
    public value!:string;
}

export class Schedule{
    public id!:number
    public parent_id!:number
    public date!:string
    public priority_criterias!:string
    public classes_configurations!:Classroom[]
    public courses!:Course[]
    public restrictions!:ScheduleRestrictions[]
    public area_configurations!:Area[]
    public teachers!:Teacher[]
    public assignments!:Assignment[]
    public version!:string
    public matrixAssingments!:any[]
}

export class ScheduleConfigurationPriorityCriteria {
    
}
