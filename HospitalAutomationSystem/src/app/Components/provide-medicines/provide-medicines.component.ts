import { Component, OnInit } from '@angular/core';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provide-medicines',
  templateUrl: './provide-medicines.component.html',
  styleUrls: ['./provide-medicines.component.css']
})
export class ProvideMedicinesComponent implements OnInit {

  data:any;
  med:any;
  constructor( private _service: AddStockHolderService, private _router: Router) { }

  ngOnInit(): void {

    this._service.MedicinePatients().subscribe((response:any)=>{
      this.data= response;
    },
    (error:any)=>{
      console.log(error);
    })

    this._service.getMedicines().subscribe((response:any)=>{
      this.med=response;
    })
  }

  provideMedicine(d:any):any{
    this._router.navigate(['ClickHere'],{
      queryParams: {p1:d.sapid, p2:d.name, p3:d.doctorname, p4:d.medicine, p5:d.diagnosis},
      skipLocationChange: true
    });
  }

  deleteMedicine(d:any):any{
    this._service.deleteMedicines(d).subscribe((response:any)=>{
      this._service.MedicinePatients().subscribe((response:any)=>{
        this.data= response;
      },
      (error:any)=>{
        console.log(error);
      })
    })
  }
}

