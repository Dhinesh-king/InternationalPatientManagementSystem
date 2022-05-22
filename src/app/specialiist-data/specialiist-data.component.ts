import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { SpecialistDetail } from '../model/specialist-detail';

@Component({
  selector: 'app-specialiist-data',
  templateUrl: './specialiist-data.component.html',
  styleUrls: ['./specialiist-data.component.css']
})
export class SpecialiistDataComponent implements OnInit {

  specialistDetails:any=[];
  constructor(private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
    console.log("Hello")
    this.getSpecialistDetail();
  }

  getSpecialistDetail()
  {
      this.mainService.getSpecialistDet().subscribe(data=>{
        console.log(data)
        this.specialistDetails=data;
      },
      error=>console.log(error));
  }

}
