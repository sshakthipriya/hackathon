import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 
  private userSub: Subscription;
  isLogin = false;

  constructor(private authService: AuthService, private userService: UserService) {
    this.checkLogin();
  }

 


  ngOnInit(): void {
    
  }

  checkLogin() {
    this.isLogin = this.userService.getLogin();
    return this.isLogin;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout()
  {
     this.userService.setLogin(false);
  }
}
