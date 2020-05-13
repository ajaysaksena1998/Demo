import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/Staff/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-staff',
  templateUrl: './remove-staff.component.html',
  styleUrls: ['./remove-staff.component.css']
})
export class RemoveStaffComponent implements OnInit {

  obj:Obj
  msg:any;
  message:any;
  success:any;

  constructor( private _service: StaffService, private router: Router ) { }

  ngOnInit(): void {
    this.obj= new Obj("","Select Role");
    this.msg=null;

  }

  removeStaff():any{

    this._service.removeStaff(this.obj).subscribe((response:any)=>{
      if(response==true){
        this.success="Successfully Deleted";
      this.msg=null;
      this.message=null;
      this.obj.email="";
      this.obj.role="Select Role";
      this.router.navigate(['removeStaff']);
      }
      else{
        this.message="Please enter valid details";
        this.success=null;
        this.msg=null;
      }
    },(error:any)=>{
      this.success=null;
      this.msg="Provided Details are not valid";
      this.message=null;
    })

  }

}

export class Obj{
  constructor( public email: any , public role: any) { }
}
