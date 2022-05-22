import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { InpatientServicePackages } from '../model/inpatient-service-packages';

@Component({
  selector: 'app-package-data',
  templateUrl: './package-data.component.html',
  styleUrls: ['./package-data.component.css']
})
export class PackageDataComponent implements OnInit {

  inpatientServicePackages:any=[];
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    
    this.getInPatientServicePackages();
  }

  getInPatientServicePackages()
  {
    this.mainService.getInpatientServicePac().subscribe(data=>{
      console.log(data)
      this.inpatientServicePackages=data;
    },
    error=>console.log(error));
  }

}
