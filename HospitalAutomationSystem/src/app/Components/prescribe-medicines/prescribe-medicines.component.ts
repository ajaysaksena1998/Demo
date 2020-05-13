import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from 'src/app/Services/Doctors/doctors.service';

@Component({
  selector: 'app-prescribe-medicines',
  templateUrl: './prescribe-medicines.component.html',
  styleUrls: ['./prescribe-medicines.component.css']
})
export class PrescribeMedicinesComponent implements OnInit {

  medical:Medical;
  medicine:any;

  sapid:any;
  constructor( private _Actirouter: ActivatedRoute, private _service: DoctorsService, private router: Router) { }

  ngOnInit(): void {

    this.medical= new Medical(null, "", "");
    this.medical.sapid = this._Actirouter.snapshot.params['sap'];
    

  }

  prescribeMedicines():any{

    this._service.presMed(this.medical).subscribe((response:any)=>{
      console.log(this.medical);
      this.router.navigate(['examine']);
    })
  }

}

export class Medical{

  constructor(public sapid:any, public medicine:any, public diagnosis:any) { }

}