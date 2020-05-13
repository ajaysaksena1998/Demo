import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor( private _http: HttpClient) { }

  removeStaff(obj:any):any{
    return this._http.post(`${URI}/removeStaff`,obj);
  }
}
