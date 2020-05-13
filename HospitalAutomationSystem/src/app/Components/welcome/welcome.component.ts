import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg00.jpeg'
  };

  data:any;
  user:any;

  constructor( private _service: JWTAuthenticationService, private stock: AddStockHolderService) { }

  ngOnInit(): void {

    this.user= this._service.getAuthenticatedUser();

    if(this._service.checkVisit()){
      if(this._service.getSessionRole() || this._service.checkStockHolder()){

        this.stock.getExpiredMedicines().subscribe((response:any)=>{
          if(response!=null){
            alert("Some Medicines already has or will be expired!!! Kindly check the Expired Medicines List!!!");
          }
        })
  
        this.stock.lowStockMedicines().subscribe((response:any)=>{
          if(response!=null){
            alert("The Stock of some medicines is less than 50!!! Please check the Low Stock Medicine List for reference!!!");
        }})
      }
      sessionStorage.setItem('visit',"no");
    }
  }
  getRoles():any{

    this._service.getRoles().subscribe((response:any)=>{
      this.data=response;
      console.log(this.data);
    })
  }
}
