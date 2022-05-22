import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-insurer-details',
  templateUrl: './insurer-details.component.html',
  styleUrls: ['./insurer-details.component.css']
})
export class InsurerDetailsComponent implements OnInit {

  insurers: any;

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.getAllInsurerDetails()
  }
  getAllInsurerDetails()
  {
    this.mainService.getAllInsurerDetails().subscribe(data=>
      {
         this.insurers=data
      },
      error=>console.log(error))
  }
}
