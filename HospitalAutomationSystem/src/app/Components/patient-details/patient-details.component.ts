import { Component, OnInit } from '@angular/core';
import { PatientDetailsService } from 'src/app/Services/Patients/patient-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  sapid:any;
  list:any;
  constructor( private _service: PatientDetailsService, private router: Router) { }

  ngOnInit(): void {
  }

  getPatientDetails():any{

    this.router.navigate(['displayPatient',this.sapid]);
}
}