import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor( private _http: HttpClient) { }

  getPatientDetails(sap:any){
    return this._http.get(`${URI}/patient/${sap}`);
  }
}
