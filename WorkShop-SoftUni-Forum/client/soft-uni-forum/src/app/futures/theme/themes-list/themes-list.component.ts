import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ITheme } from 'src/app/interfaces';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnChanges {
  @Input() theme!: ITheme;

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  canSubscribe: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnChanges(): void {
    // TODO: ADD BETER FUNCTIONALITY!
    this.canSubscribe = !this.theme.subscribers.includes(
      '5fa64b162183ce1728ff371d'
    );
  }
}
