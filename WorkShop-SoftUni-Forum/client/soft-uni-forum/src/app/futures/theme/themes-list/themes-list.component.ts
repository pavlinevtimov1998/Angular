import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ITheme, IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnChanges {
  @Input() theme!: ITheme;

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe!: boolean;
  isOwner!: boolean;
  currentUser!: IUser | undefined;

  constructor(private authService: AuthService) {}

  ngOnChanges(): void {
    this.authService.currentUser$.pipe(
      take(1),
      map((user) => {
        this.currentUser = user;
      })
    );

    this.isOwner = this.theme.userId._id == this.currentUser?._id;
    this.canSubscribe = this.currentUser
      ? this.theme.subscribers.includes(this.currentUser._id)
      : false;
  }
}
