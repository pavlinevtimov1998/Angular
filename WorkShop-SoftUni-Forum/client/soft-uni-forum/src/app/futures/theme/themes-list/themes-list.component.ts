import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ITheme, IUser } from 'src/app/interfaces';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit, DoCheck {
  @Input() theme!: ITheme;

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe: boolean = false;
  isOwner: boolean = false;
  currentUser!: IUser | undefined;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    this.isOwner = this.theme.userId._id == this.currentUser?._id;
    if (this.currentUser) {
      this.canSubscribe = this.theme.subscribers.includes(
        this.currentUser?._id
      );

      console.log(this.currentUser);
    }
  }

  ngDoCheck(): void {
    console.log('check');
  }

  handleSubscribe(): void {
    this.themeService
      .subscribe$(this.theme._id, this.currentUser)
      .subscribe((theme) => {});
  }
}
