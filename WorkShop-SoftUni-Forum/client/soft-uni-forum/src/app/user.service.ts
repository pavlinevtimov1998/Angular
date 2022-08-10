import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  loggetIn = false;

  constructor() {}

  login(): void {
    this.loggetIn = true;
  }

  logout(): void {
    this.loggetIn = false;
  }
}
