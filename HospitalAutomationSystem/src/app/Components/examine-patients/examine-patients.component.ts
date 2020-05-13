import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/Services/Doctors/doctors.service';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examine-patients',
  templateUrl: './examine-patients.component.html',
  styleUrls: ['./examine-patients.component.css']
})
export class ExaminePatientsComponent implements OnInit {

  patients:any;

  constructor( private _service: DoctorsService, private jwt: JWTAuthenticationService, private router: Router) { }

  ngOnInit(): void {
    
    let user= this.jwt.getAuthUser();
    this._service.getPatientsinfo(user).subscribe((response:any)=>{
      this.patients=response;
      console.log(response);
    },(error:any)=>{
      console.log(error);
    })
  }

  getPastHistory(sap:any):any{
    this.router.navigate(['getPastHistory',sap]);
  }

  prescribeMedicine(sap:any):any{
    this.router.navigate(['prescribeMed',sap]);
  }
}
