import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'pto-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 

  user$: Observable<User>;
   
  constructor(
      private userService: UserService,
      private router: Router,
      private authService: AuthService) {
     this.user$ = userService.getUser();
  }

  logout() {
      this.userService.logout();
      this.router.navigate(['']);
  }
}