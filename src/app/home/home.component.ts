import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log('Home Init');
   this.loginService.userSubject.subscribe(
     data =>console.log(data)
   ) 
    console.log('After Init'); 
  }
   

}

 
