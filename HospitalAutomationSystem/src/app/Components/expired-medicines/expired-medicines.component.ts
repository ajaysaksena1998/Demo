import { Component, OnInit } from '@angular/core';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expired-medicines',
  templateUrl: './expired-medicines.component.html',
  styleUrls: ['./expired-medicines.component.css']
})
export class ExpiredMedicinesComponent implements OnInit {

  data:any;
  message:any;

  constructor( private _service: AddStockHolderService, private router: Router) { }

  ngOnInit(): void {
    this.getExpiredMedicines();
  }

  getExpiredMedicines():any{
    this._service.getExpiredMedicines().subscribe((response:any)=>{
      this.data=response;
    },(error:any)=>{
      console.log(error);
    })
  }

  deleteMedicine(d:any){
    this._service.deleteMedicinesbyName(d).subscribe((response:any)=>{
      console.log(response);
      this.getExpiredMedicines();
      this.message= `Medicine ${d.medname} successfully deleted`;
    })
  }
}
