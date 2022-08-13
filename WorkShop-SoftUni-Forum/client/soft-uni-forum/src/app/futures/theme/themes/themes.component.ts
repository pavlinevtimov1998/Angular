import { Component, OnInit } from '@angular/core';
import { ITheme } from 'src/app/interfaces/theme';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes!: ITheme[];

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
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
