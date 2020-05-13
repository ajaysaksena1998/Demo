import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor( private _http: HttpClient) { }

  AddingDoctors(doctor:any):any{
    return this._http.post(`${URI}/addDoctors`,doctor);
  }

  getPatientsinfo(username:any):any{
    return this._http.get(`${URI}/getPatientInfo/${username}`);
  }

  getPatientsValue(sap:any):any{
    return this._http.get(`${URI}/patient/${sap}`);
  }

  presMed(medical:any):any{
    return this._http.post(`${URI}/presMed`,medical);
  }


}
