export class InsurerDetail
{
   
   constructor(
       public insurerDetailId:number,
       public insurerName:string,
       public insurerPackageName:string,
       public insuranceAmountLimit:number,
       public disbursementDuration:number
       ){}
}