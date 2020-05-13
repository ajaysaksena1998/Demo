import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';

@Component({
  selector: 'app-click-here-to-provide-medicines',
  templateUrl: './click-here-to-provide-medicines.component.html',
  styleUrls: ['./click-here-to-provide-medicines.component.css']
})
export class ClickHereToProvideMedicinesComponent implements OnInit {

  data:any;
  med:any;
  medicines: Medicines;

  public medicineInfo: any[] = [{
    id:1,
    medname:'Select Medicines',
    med_stock:''
  }];


  constructor( private _ActiRouter: ActivatedRoute, private _service: AddStockHolderService, private router: Router) { }

  ngOnInit(): void {

    this._ActiRouter.queryParams.subscribe((response:any)=>{
      this.data= response;
    })

    this._service.getMedicines().subscribe((response:any)=>{
      this.med=response;
    },(error:any)=>{
      console.log(error);
    })

    this.medicines= new Medicines(this.data.p1, "Select Medicines", null);
  }

  medicinesProvided():any{

    this._service.addMedicineStock(this.medicineInfo, this.data.p1).subscribe((response:any)=>{
      this.router.navigate(['provideMedicine']);
    }, (error:any)=>{
      console.log(error);
    })
  }

  addAddress():any{
    this.medicineInfo.push({
      id: this.medicineInfo.length + 1,
      medname:'Select Mediciness',
      med_stock:''
    })
  }

  removeAddress(i: number) {
    this.medicineInfo.splice(i, 1);
  }
}

export class Medicines{
  constructor( public sapid:any, public medname:any, public med_stock:any) { }
}

