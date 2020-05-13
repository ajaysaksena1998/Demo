import { Component, OnInit } from '@angular/core';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';
import { Router } from '@angular/router';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  stock:Stock;
  b:any=false;
  msg:any="Stock Added Successfully";
  constructor( private _service: AddStockHolderService, private router: Router) { }

  ngOnInit(): void {

    this.stock= new Stock("", null, null, null);
  }

  addStock():any{

    this._service.addingStock(this.stock).subscribe((response:any)=>{
      this.b= true;
      this.stock.expiryDate=null;
      this.stock.medname="";
      this.stock.med_stock=null;
      this.stock.priceperpiece=null;
      this.router.navigate(['addstock']);
    },(error:any)=>{
      console.log(error);
      this.b=false;
    })

  }

}

export class Stock{
  constructor(public medname:any, public med_stock:any, public priceperpiece:any, public expiryDate:any) { }
}
