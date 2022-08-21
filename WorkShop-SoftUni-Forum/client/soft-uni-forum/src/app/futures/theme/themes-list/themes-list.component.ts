import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ITheme, IUser } from 'src/app/interfaces';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnChanges, OnDestroy {
  @Input() theme!: ITheme;

  subscribtion$: Subscription = new Subscription();

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe!: boolean;
  currentUser!: IUser | undefined;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnChanges(): void {
    this.subscribtion$.add(
      this.authService.currentUser$.subscribe((user) => {
        this.currentUser = user;
        if (this.currentUser) {
          this.canSubscribe = !this.theme.subscribers.includes(
            this.currentUser?._id
          );
        }
      })
    );
  }

  handleSubscribe(theme: ITheme): void {
    this.subscribtion$.add(
      this.themeService.subscribe$(theme._id).subscribe((newTheme) => {
        this.theme.subscribers = newTheme.subscribers;
        this.canSubscribe = !this.canSubscribe;
      })
    );
  }

  handleUnsubscribe(theme: ITheme): void {
    this.subscribtion$.add(
      this.themeService.unsubscribe$(theme._id).subscribe((newTheme) => {
        this.theme.subscribers = newTheme.subscribers;
        this.canSubscribe = !this.canSubscribe;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscribtion$.unsubscribe();
  }
}
