import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URI } from '../app.constant';
export const USER= 'auth-user';
export const TOKEN='auth-token';
export const ROLE='auth-role';
export const FIRST='visit'


@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationService {

  constructor(private _http: HttpClient) { }

  role:any;
  executeJWTAuthenticationService(username:any,password:any):any{

    this.getUserRole(username).subscribe((response:any)=>{
      this.role=response;
    })
    return  this._http.post<any>(`${URI}/authenticate`,{
      username,
      password
    }).pipe(map(data=>{
      sessionStorage.setItem(USER,username);
      sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
      sessionStorage.setItem(ROLE, this.role.role);
      sessionStorage.setItem(FIRST,"yes");
      console.log(this.role);
      return data;
    }));
  }


  getUserRole(username:any):any{
    return this._http.get<getRoles>(`${URI}/getRole/${username}`);
  }

  getRoles():any{
    return this._http.get<getRoles>(`${URI}/patients`);
  }

  isAuthenticated(){
    let user = sessionStorage.getItem(USER);
    return !(user==null);
  }

  getSessionRole():any{
    if(sessionStorage.getItem(ROLE)=='ADMIN'){
      return true;
    }
    return false;
  }

  getDocRole():any{
    if(sessionStorage.getItem(ROLE)=='DOCTOR'){
      return true;
    }
    return false;
  }

  checkSessionRole():any{
    if(sessionStorage.getItem(ROLE)=='RECEPTIONIST'){
      return true;
    }
    return false;
  }

  getAuthUser():any{
    return sessionStorage.getItem(USER);
  }

  getRole():any{
    return sessionStorage.getItem(ROLE);
  }

  checkStockHolder():any{
    if(sessionStorage.getItem(ROLE)=="STOCK HOLDER"){
      return true;
    }
    return false;
  }

  checkVisit():any{
    if(sessionStorage.getItem(FIRST)=="yes"){
      return true;
    }
    return false;
  }


  // executeAuthenticationService(username:any,password:any):any{
  //   let basicAuthHeader= "Basic "+window.btoa(username+':'+ password);
  //   let headers= new HttpHeaders({
  //     Authorization: basicAuthHeader
  //   })
  //   return  this._http.get<AuthenticationBean>(`${URI}/basicAuth`,{headers}).pipe(map(data=>{
  //     sessionStorage.setItem(USER,username);
  //     sessionStorage.setItem(TOKEN,basicAuthHeader);
  //     return data;
  //   }));
  // }

  getAuthenticatedUser():any{
    return sessionStorage.getItem(USER);
  }

  getAuthenticationToken():any{
    return sessionStorage.getItem(TOKEN);
  }

  logout(){
    sessionStorage.removeItem(USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(ROLE);
    sessionStorage.removeItem(FIRST);
  }

  changePassword(data:any):any{
    return this._http.post(`${URI}/changePassword`,data);
  }
}

export class AuthenticationBean{
  constructor(public message:string) { }
}

export class getRoles{
  constructor( public role: string) { }
}
