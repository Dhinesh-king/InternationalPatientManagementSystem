import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PackageDataComponent } from './package-data/package-data.component';
import { SpecialiistDataComponent } from './specialiist-data/specialiist-data.component';
import { InitiateClaimComponent } from './initiate-claim/initiate-claim.component';
import { InsurerDetailsComponent } from './insurer-details/insurer-details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AddPatientComponent,
    PackageDataComponent,
    SpecialiistDataComponent,
    InitiateClaimComponent,
    InsurerDetailsComponent,
    HomeComponent,
    NotfoundComponent,
    AllpatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
