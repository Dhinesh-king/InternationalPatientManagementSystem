export class InitiateClaim
{
   constructor(
       public initiateClaimId:number,
       public patientName:string,
       public ailment:string,
       public treatmentPackageName:string,
       public insurerName:string
       ){}
}