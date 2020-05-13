import { Component, OnInit } from '@angular/core';
import { AddStockHolderService } from 'src/app/Services/StockHolders/add-stock-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock-holders',
  templateUrl: './add-stock-holders.component.html',
  styleUrls: ['./add-stock-holders.component.css']
})
export class AddStockHoldersComponent implements OnInit {

  stockHolder: StockHolder;
  data:any;

  constructor( private _service: AddStockHolderService, private router: Router) { }

  ngOnInit(): void {
    this.stockHolder= new StockHolder(null, "");
  }

  addStockHolders():any{
    this._service.AddingStockHolders(this.stockHolder).subscribe((response:any)=>{
      this.data= response;
      this.router.navigate(['/welcome']);
    });
  }

}

export class StockHolder{
  constructor( public holder_id:number, public username:string) { }
}
