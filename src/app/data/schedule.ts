import { Area } from "./area";
import { Assignment } from "./assignment"
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
    public area_configurations!:Area[]
    public teachers!:Teacher[]
    public assignments!:Assignment[]
    public version!:string
    public matrixAssingments!:any[]
}

export class ScheduleConfigurationPriorityCriteria {
    
}
