import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  Login(userName,Password){
    console.log("From login service",userName,Password);

  }

}
