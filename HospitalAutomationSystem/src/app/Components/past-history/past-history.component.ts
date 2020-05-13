import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/Services/Doctors/doctors.service';

@Component({
  selector: 'app-past-history',
  templateUrl: './past-history.component.html',
  styleUrls: ['./past-history.component.css']
})
export class PastHistoryComponent implements OnInit {

  patients:any;
  sapid:any;
  constructor( private _route: ActivatedRoute, private _service: DoctorsService) { }

  ngOnInit(): void {

    this.sapid = this._route.snapshot.params['sap'];
    this._service.getPatientsValue(this.sapid).subscribe((response:any)=>{
      this.patients=response;
    },(error:any)=>{
      console.log(error);
    })
  }

}
