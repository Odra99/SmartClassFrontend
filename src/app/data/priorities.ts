export class Priority{
    public id!:number
    public description!:string
    public type!:Type
    public subtype!:Type
}

export class Type{
    public id!:number
    public parent_type!:number
    public value!:string
}