import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.loggedIn;
  }

  get user(): IUser {
    return this.userService.user;
  }

  constructor(public userService: UserService) {}

  logoutHandler(): void {
    this.userService.logout();
  }
}
