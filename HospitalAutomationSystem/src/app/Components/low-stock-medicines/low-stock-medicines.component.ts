import { Component, OnInit } from '@angular/core';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';

@Component({
  selector: 'app-low-stock-medicines',
  templateUrl: './low-stock-medicines.component.html',
  styleUrls: ['./low-stock-medicines.component.css']
})
export class LowStockMedicinesComponent implements OnInit {

  data:any;
  message:any;

  constructor( private _service: AddStockHolderService) { }

  ngOnInit(): void {
    this.getLowStockMed();
  }

  getLowStockMed(){
    this._service.lowStockMedicines().subscribe((response:any)=>{
      this.data=response;
    })
  }

  deleteMedicine(data:any):any{
    this._service.deleteMedicinesbyName(data).subscribe((response:any)=>{
      console.log(response);
      this.getLowStockMed();
      this.message= `Medicine ${data.medname} successfully deleted`;
    })
  }

}
