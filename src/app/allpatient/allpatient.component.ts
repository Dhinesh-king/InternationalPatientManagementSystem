import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.css']
})
export class AllpatientComponent implements OnInit {

  constructor(private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
    this.getAllpatients();
  }

  patientList:any;
  patientData:Patient=new Patient('','',new Date(),'',0,'');
  isEdit=false;
  getAllpatients(){
      this.mainService.getAllPatients().subscribe(data=>{
        this.patientList=data;
      }
      ,error=>{
        console.log(error);
      });
  }
  onEdit(patientId:any){
    this.mainService.getPatientById(patientId).subscribe(data=>{
        this.patientData=data;
        this.isEdit=true;
    },error=>{
        console.log(error)
    });
      this.getAllpatients();
  }

  onUpdate(){
    this.mainService.updatePatient(this.patientData).subscribe(data=>{
      this.isEdit=false;
      this.getAllpatients()
    },error=>{
      console.log(error)
    })
  }

}
