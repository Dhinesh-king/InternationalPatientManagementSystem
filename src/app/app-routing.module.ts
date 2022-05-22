import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { HomeComponent } from './home/home.component';
import { InitiateClaimComponent } from './initiate-claim/initiate-claim.component';
import { InsurerDetailsComponent } from './insurer-details/insurer-details.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PackageDataComponent } from './package-data/package-data.component';
import { SpecialiistDataComponent } from './specialiist-data/specialiist-data.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/login-page',pathMatch:'full'},
  {path:'login-page',component:LoginComponent},
  {path:'ipTreatmentPackages' , component:PackageDataComponent},
  {path:'specialists' , component:SpecialiistDataComponent},
  {path:'addPatient' , component:AddPatientComponent},
  {path:'allPatients',component:AllpatientComponent},
  {path:'insurer-details',component:InsurerDetailsComponent},
  {path:'initiate-claim',component:InitiateClaimComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
