import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.loggetIn;
  }

  constructor(public userService: UserService) {}

  loginHandler(): void {
    this.userService.login();
  }

  logoutHandler(): void {
    this.userService.logout();
  }
}