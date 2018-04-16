import { Injectable } from '@angular/core';
import { Http,  Headers, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  public userSubject = new Subject<any>();
  
  constructor(private http: HttpClient) { }
   
    login(user) {
     console.log("Login service");
     const req = this.http.post('https://effort-tracker-back.herokuapp.com/user',{
      user
     }).subscribe(
     res => {
       console.log(res);
       this.getuser(res);
        return res;
     },
       err =>{
         console.log('Error'+err);
       }
     )
  }
  
  getuser(user){
    console.log('get USer');
    this.userSubject.next(user);
  }
  }