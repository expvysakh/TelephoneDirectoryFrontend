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
  constructor(private router: Router, private loginService: LoginService) {

   }

  OnSignIn(form: NgForm) {

this.userName=form.value.username; 
this.Password=form.value.password
    this.RedirectToHome();

   
    this.loginService.Login(this.userName,this.Password);
  
  }

  RedirectToHome() {
    this.router.navigate(['/landing-container']);
  }

  ngOnInit() {
  }

}
