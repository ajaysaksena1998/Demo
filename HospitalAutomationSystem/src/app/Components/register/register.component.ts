import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from 'src/app/Services/Register/register-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;
  m:any="";
  checker:any="";
  bool:boolean=false;
  err:boolean= false;
  registered:string="Successfully Registered";
  error:string="Some Error Occured!! Please contact ADMIN!!!"
  confirm:any;
  constructor( private _service: RegisterUserService, private router:Router ) { }

  ngOnInit(): void {
    this.register= new Register("","");
  
  }

  RegisterUser():any{
    this.checker="";
    if(this.register.password==this.confirm){
      this._service.RegisteringUsers(this.register).subscribe((response:any)=>{
        if(response==true){
          this.bool=true;
          this.err=false;
          this.register.password="";
          this.register.username="";
          this.confirm="";
          this.router.navigate(['/login']);
        }
        else{
          this.bool=false;
          this.err=true;
        }
      })
    }
    else{
      this.checker= "Passwords do not match";
      this.confirm="";
    }
    
  }
}

export class Register{
  constructor( public username:string, public password:string) { }
}
