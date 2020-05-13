import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/Services/Doctors/doctors.service';
import { Router } from '@angular/router';
import { Doctor } from '../header/header.component';

@Component({
  selector: 'app-adding-doctors',
  templateUrl: './adding-doctors.component.html',
  styleUrls: ['./adding-doctors.component.css']
})
export class AddingDoctorsComponent implements OnInit {

  doctorId:any;
  doctorName:any;
  designation:any;
  doctor:Doctor;
  data:any;
  constructor( private _service: DoctorsService, private router : Router ) { }

  ngOnInit(): void {
    this.doctor= new Doctor(null,"","","");
  }

  handleDoctors():any{

    console.log(this.doctor.doctorId);
    console.log(this.doctor);
    this._service.AddingDoctors(this.doctor).subscribe((response:any)=>{
      this.data=response;
      console.log(this.data);
      this.router.navigate(['welcome']);
    })
  }
}


