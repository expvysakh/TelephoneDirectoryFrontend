import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
userName;
Password;
userDetails;
  constructor(private router: Router, private loginService: LoginService) {

   }

  OnSignIn(form: NgForm) {

this.userName=form.value.username; 
this.Password=form.value.password

   
    this.loginService.Login(this.userName,this.Password);
  
  }

 

  ngOnInit() {
       

  }

}
