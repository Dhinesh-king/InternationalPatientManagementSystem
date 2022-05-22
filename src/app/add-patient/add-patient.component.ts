import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Patient } from '../model/patient';
import { TreatmentPlan } from '../model/treatment-plan';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private mainService:MainService,private router:Router,private fb:FormBuilder) { }
  patient:Patient=new Patient("","",new Date(),"",21,"");
  treatmentPlan:TreatmentPlan=new TreatmentPlan(0,"","",0.0,"",new Date(),new Date());

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigateByUrl("/login-page")
    }
  }

  patientForm:FormGroup= this.fb.group({
    ailment:['',Validators.required],
    name:['',Validators.required],
    treatmentCommencementDate:[null],
    treatmentPackageName:['',Validators.required],
    age:['',Validators.required]
  })

  onSubmit()
  {
     this.getTreatmentP1();
  }
  getTreatmentP1()
  {
    this.mainService.getTreatP1(this.patient).subscribe(data=>{
      this.treatmentPlan=data;
      console.log(this.treatmentPlan);
    },
    error=>console.log(error));
  }
}
