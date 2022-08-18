import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ITheme } from 'src/app/interfaces';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes!: ITheme[];

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(
    private themesService: ThemeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.themesService.getThemes().subscribe((themesArray) => {
      this.themes = themesArray;
    });
  }
}
