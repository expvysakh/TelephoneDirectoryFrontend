import { Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable()
export class LoginService {

  constructor(private router: Router) { }
  u;
  p;
  v;
  
 
  response =  {

      "valid": false
    };

  

  RedirectToHome() {
    this.router.navigate(['/landing-container']);
  }

  Login(userName, Password) {
    console.log("From login service", userName, Password);
   

      if (this.response.valid == true) {
        alert("valid");
        this.RedirectToHome();

      }
      else {
        alert("not valid");

      }
     


    }



  }


