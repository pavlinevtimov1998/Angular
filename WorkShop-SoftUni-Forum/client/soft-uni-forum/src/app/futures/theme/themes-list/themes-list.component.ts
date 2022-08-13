import { Component, Input, OnChanges } from '@angular/core';
import { ITheme } from 'src/app/interfaces/theme';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnChanges {
  @Input() theme!: ITheme;

  isLoggedIn: boolean = this.userService.isLoggedIn();
  canSubscribe: boolean = false;

  constructor(private userService: UserService) {}

  ngOnChanges(): void {
    this.canSubscribe = this.theme.subscribers.includes(
      '5fa64b162183ce1728ff371d'
    );
  }
}
