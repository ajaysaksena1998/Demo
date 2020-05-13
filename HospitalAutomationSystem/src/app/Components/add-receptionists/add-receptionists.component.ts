import { Component, OnInit } from '@angular/core';
import { AddReceptionistsService } from 'src/app/Services/Receptionists/add-receptionists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-receptionists',
  templateUrl: './add-receptionists.component.html',
  styleUrls: ['./add-receptionists.component.css']
})
export class AddReceptionistsComponent implements OnInit {

  receptionist:Receptionist;
  data:any;

  constructor( private _service: AddReceptionistsService, private router: Router) { }

  ngOnInit(): void {
    this.receptionist= new Receptionist( null, "");
  }

  AddReceptionists():any{
    this._service.AddingReceptionists(this.receptionist).subscribe((response:any)=>{
      this.data=response;
      this.router.navigate(['/welcome']);

    })
  }

}

export class Receptionist{
  constructor( public receptionist_id:number, public receptionistname:string) { }
}