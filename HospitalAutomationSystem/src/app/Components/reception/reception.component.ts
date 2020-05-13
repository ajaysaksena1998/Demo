import { Component, OnInit } from '@angular/core';
import { AddReceptionistsService } from 'src/app/Services/Receptionists/add-receptionists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  patient:Patient;
  doc:any;

  constructor( private _service: AddReceptionistsService, private router: Router) { }

  ngOnInit(): void {

    this.patient= new Patient(null, "", "", null,"Select Gender","","Select Doctor","","","","","","","","Select Conveyance","",null);
    this._service.getDoctorList().subscribe((response:any)=>{
      console.log(response);
      this.doc=response;
    });
  }

  registerPatients():any{

    this._service.addPatients(this.patient).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['welcome']);
    })
    
  }

}

export class Patient{
  constructor( public sapid:number, public name:string, public contact:string, public age:number, public gender:string, public course:string, public doctorname:string, public medicine:string, public diagonosis:string, public temperature:string, public bloodpressure:string, public weight:string, public chronicAilment:string,public allergies:string, public conveyance:string, public hostelAddr:string, public dateAndtime:any  ) { }
}
