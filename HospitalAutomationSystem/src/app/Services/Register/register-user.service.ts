import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor( private _http: HttpClient) { }

  RegisteringUsers(user:any):any{
    return this._http.post(`${URI}/register`,user);
  }
}
