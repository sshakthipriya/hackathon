import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  email:String = "";
  password:String ="";

  isLogin :boolean = false;

  setEmail(email:String)
  {
    this.email = email;
  }

  setPassword(password:String)
  {
    this.password = password;
  }

  getEmail()
  {
    return this.email;
  }

  getPassword()
  {
    return this.password;
  }

  setLogin(value:boolean)
  {
       this.isLogin = value;
  }

  getLogin()
  {
    return this.isLogin;
  }

}
