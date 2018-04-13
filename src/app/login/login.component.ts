import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(
   private loginService: LoginService,
   private router : Router
 ) {}
ngOnInit() {
  }

  onSubmit = function(user) {
    console.log(user);
    this.loginService.login(user);
    this.router.navigate(['home']);
  }
}

