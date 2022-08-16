import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  get isLoggedIn(): boolean {
    return this.userServise.loggedIn;
  }

  constructor(private userServise: UserService) {
    
  }

  ngOnInit(): void {}
}
