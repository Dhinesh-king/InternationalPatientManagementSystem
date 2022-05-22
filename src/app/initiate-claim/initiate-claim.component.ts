import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { InitiateClaim } from '../model/initiate-claim';

@Component({
  selector: 'app-initiate-claim',
  templateUrl: './initiate-claim.component.html',
  styleUrls: ['./initiate-claim.component.css']
})
export class InitiateClaimComponent implements OnInit {
  initiateClaimForm: FormGroup;
  balance:any
  
  constructor(private mainService:MainService,private fb:FormBuilder,private router:Router) { 
    this.initiateClaimForm=this.fb.group({
      patientName:['',[Validators.required,Validators.maxLength(15),Validators.minLength(4)]],
      ailment:['',[Validators.required]],
      treatmentPackageName:['',[Validators.required]],
      insurerName:['',[Validators.required]],
      
      });
  }

  ailments=['Orthopaedics','Urology']
  treatmentPackageNames=['Health Insurance','Medical Insurance','Medicare Insurance','Jeevan Anand']
  insurerNames=['Ajanta','Star Health','Tata Health Care','LIC']
  initiateClaim=new InitiateClaim(1,'','','','')
  isInitiatedClaim:boolean=true

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.router.navigateByUrl("/login-page")
    }
  }
  handleForm()
  {
    console.log(this.initiateClaimForm.value)
    this.mainService.saveClaim(this.initiateClaimForm.value).subscribe(data=>
      {
      console.log(data)
      this.balance=data;
     
     
      },
     error=>console.log(error))
  }

}
