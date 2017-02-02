import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  OnSignIn(form:NgForm){
    
  this.RedirectToHome();
}
 
  RedirectToHome() {
    this.router.navigate(['/landing-container']);
  }

  ngOnInit() {
  }

}
