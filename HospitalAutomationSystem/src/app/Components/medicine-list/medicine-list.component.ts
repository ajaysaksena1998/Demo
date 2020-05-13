import { Component, OnInit } from '@angular/core';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  data:any;

  constructor( private _service: AddStockHolderService) { }

  ngOnInit(): void {

    this._service.getAllMedicines().subscribe((response:any)=>{
      this.data= response;
    }, (error:any)=>{
      console.log(error);
    })
  }

}
