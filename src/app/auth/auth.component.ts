import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
 
  isLoginMode = true;
  isLoading = false;
  err: string = '';
  
  constructor(private authService: AuthService, private router: Router,private userService:UserService) {}
  onSwitchMode () {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {

    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.userService.setEmail(email);
    this.userService.setPassword(password);
    this.isLoading = true;
    if(this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
          this.userService.setLogin(true);
          const component2 = new HeaderComponent(this.authService,this.userService);
          this.router.navigate(['/mybooks']);
        }, 
        errorRes => {
          console.log(errorRes);
          switch(errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              this.err = 'This email does not exists';
              break;
            case 'INVALID_PASSWORD':
              this.err = 'Invalid Login credentials';
              break;
            case 'USER_DISABLED':
              this.err = 'User is disabled';
              break;
            default: 
            this.err = 'Unknown Error Occurred'
          }
          this.isLoading = false;
        }
      )
    } else {
      this.authService.signup(email,password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        }, 
        errorRes => {
          console.log(errorRes);
          switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              this.err = 'This email already exists';
              break;
            default: 
            this.err = 'Unknown Error Occurred'
          }
          this.isLoading = false;
        });
    }
   
    form.reset();
  }
}
