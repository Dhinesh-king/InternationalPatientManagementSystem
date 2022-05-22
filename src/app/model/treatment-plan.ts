export class TreatmentPlan {
    constructor(
    public treatmentPlanId: number,
    public packageName: string,
    public testDetails: string,
    public cost: number,
    public specialist: string,
    public treatmentCommencementDate: Date,
    public treatmentEndDate: Date
    ){}
}
