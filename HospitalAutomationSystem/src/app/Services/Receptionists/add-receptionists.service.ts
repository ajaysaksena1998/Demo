import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AddReceptionistsService {

  constructor( private _http:HttpClient) { }

  AddingReceptionists( receptionist:any):any{
    return this._http.post(`${URI}/addReceptionist`,receptionist);
  }

  getDoctorList():any{
    return this._http.get(`${URI}/getDoctorNames`);
  }

  addPatients(patient:any):any{
    return this._http.post(`${URI}/savePatient`,patient);
  }
}
