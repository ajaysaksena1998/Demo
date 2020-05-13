import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  change:Change;

  registered:any;
  bool:any;
  checker:any;
  confirm:any;
  constructor( private jwt: JWTAuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.change= new Change("","","");
    // this.jwt.getAuthenticationUser().subscribe((response:any)=>{
    //   this.change.username;
    //   console.log(this.change.username);
    // },(error:any)=>{
    //   console.log(console.error);
      
    // })
    this.change.username= this.jwt.getAuthUser();
    this.change.role= this.jwt.getRole();
  }


  changePassword():any{

    if(this.change.password==this.confirm){
      this.jwt.changePassword(this.change).subscribe((response:any)=>{
        this.router.navigate(['logout']);
        this.checker=null;
      })
    }
    else{
      this.checker="The passwords do not match";
    }
  }
}

export class Change{
  constructor( public username:any, public password:any, public role:any) { }
}
