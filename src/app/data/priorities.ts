export class Priority{
    public id!:number | null
    public description!:string
    public type!:Type
    public subtype!:Type
    public asc:boolean = false
    public order!:number
}

export class Type{
    public id!:number
    public parent_type!:number
    public value!:string
}