import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientDetailsService } from 'src/app/Services/Patients/patient-details.service';

@Component({
  selector: 'app-display-patient-details',
  templateUrl: './display-patient-details.component.html',
  styleUrls: ['./display-patient-details.component.css']
})
export class DisplayPatientDetailsComponent implements OnInit {

  sap:any;

  list:any;
  constructor( private _ActiRouter: ActivatedRoute, private _service: PatientDetailsService) { }

  ngOnInit(): void {

    this.sap= this._ActiRouter.snapshot.params['sapid'];
    this._service.getPatientDetails(this.sap).subscribe((response:any)=>{
      this.list=response;
    },(error:any)=>{
      console.log(error);
    })
    console.log(this.sap);

  }
}
