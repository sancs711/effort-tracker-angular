import { Injectable } from '@angular/core';
import { Http,  Headers, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  
    login(user) {
     console.log("Login service");
     const req = this.http.post('https://effort-tracker-back.herokuapp.com/login',{
      user
     }).subscribe(
     res => {
       console.log(res);
        return res;
     },
       err =>{
         console.log('Error');
       }
     )
     
  }
}
