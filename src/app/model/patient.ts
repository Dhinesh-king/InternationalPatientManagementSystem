export class Patient {
    constructor(
    public ailment:string,
    public name:string,
    public treatmentCommencementDate:Date,
    public treatmentPackageName:string,
    public age:number,
    public status:string
    ){}
}
