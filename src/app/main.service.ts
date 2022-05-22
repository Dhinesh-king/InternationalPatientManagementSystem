import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SpecialistDetail } from './model/specialist-detail';
import { TreatmentPlan } from './model/treatment-plan';
import { InpatientServicePackages } from './model/inpatient-service-packages';
import { Patient } from './model/patient';
import { InitiateClaim } from './model/initiate-claim';
import { login } from './model/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService{

  //private treatmentOfferingUrl = "http://localhost:8081/offerings";
  //private URL2="http://localhost:8081/offerings/Specialists";
  //private URL3 = "http://localhost:8082/treatment";
  //private insuranceUrl: string = 'http://localhost:8083/insurer'

  private baseUrl = "http://localhost:9090";
  
  constructor(private httpClient: HttpClient,private router:Router) { }

   //tokenData=localStorage.getItem("token");
   token:any=localStorage.getItem("token");
  
  login(login: login) {
    return this.httpClient.post(`${this.baseUrl}/user/login`, login);
  }
  
  getInpatientServicePac(): Observable<InpatientServicePackages[]> {
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
    }
    return this.httpClient.get<InpatientServicePackages[]>(`${this.baseUrl}/offerings/IPTreatmentPackages`,{headers:{"Authorization":this.token}});
  }

  getSpecialistDet(): Observable<SpecialistDetail[]> {
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
    }
    return this.httpClient.get<SpecialistDetail[]>(`${this.baseUrl}/offerings/Specialists`,{headers:{"Authorization":this.token}});
  }


  getTreatP1(patient: Patient): Observable<TreatmentPlan> {
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
    }
    return this.httpClient.post<TreatmentPlan>(`${this.baseUrl}/treatment/FormulateTreatmentTimetable`, patient,{headers:{"Authorization":this.token}});
  }

  getAllInsurerDetails() {
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
     
    }
    return this.httpClient.get(`${this.baseUrl}/insurer/allInsurerDetails`,{headers:{"Authorization":this.token}})
  }
  saveClaim(initiateClaim: InitiateClaim) {
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
     
    }
    return this.httpClient.post(`${this.baseUrl}/insurer/initiateClaim`, initiateClaim,{headers:{"Authorization":this.token}})
  }

  getAllPatients() {
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
      
    }
    return this.httpClient.get(`${this.baseUrl}/treatment/allPatients`,{headers:{"Authorization":this.token}});
  }

  getPatientById(patientId:number): Observable<Patient>{
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
     
    }
    return this.httpClient.get<Patient>(`${this.baseUrl}/treatment/getById/${patientId}`,{headers:{"Authorization":this.token}});
  }

  updatePatient(patient:Patient){
    if(this.token==null){
      this.router.navigateByUrl("/login-page")
      
    }
    return this.httpClient.post(`${this.baseUrl}/treatment/updatePatient`,patient,{headers:{"Authorization":this.token}});
  }
}
