import { Component, OnInit } from '@angular/core';
import { ITheme } from 'src/app/interfaces';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes!: ITheme[];

  get isLogged(): boolean {
    return this.userService.loggedIn;
  }

  constructor(
    private themesService: ThemeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.themesService.getThemes().subscribe((themesArray) => {
      this.themes = themesArray;
    });
  }
}
