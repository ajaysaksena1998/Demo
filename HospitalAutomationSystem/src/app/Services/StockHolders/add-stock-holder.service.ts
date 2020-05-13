import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AddStockHolderService {

  constructor( private _http: HttpClient) { }

  AddingStockHolders( StockHolder:any):any{
    return this._http.post(`${URI}/addStockHolder`,StockHolder);
  }

  MedicinePatients():any{
    return this._http.get(`${URI}/getMedicinePatients`);
  }

  addingStock(stock:any):any{
    return this._http.post(`${URI}/addingStock`,stock);
  }

  getMedicines():any{
    return this._http.get(`${URI}/getmedicinesnames`);
  }

  addMedicineStock(medicines:any, data:any):any{
    return this._http.post(`${URI}/addMedicineStock/${data}`,medicines);
  }

  getAllMedicines():any{
    return this._http.get(`${URI}/medicines`);
  }

  getExpiredMedicines():any{
    return this._http.get(`${URI}/getMedicineToBeExpired`);
  }

  deleteMedicinesbyName(d:any):any{
    return this._http.post(`${URI}/DeleteMedicineByName`,d);
  }

  lowStockMedicines():any{
    return this._http.get(`${URI}/lowStockMedicines`);
  }

  deleteMedicines(d:any):any{
    return this._http.post(`${URI}/deletePatientForce`,d);
  }

  // getMedicijnes():any{
  //   return this._http.get(`${URI}/medicines`);
  // }
}
