import { Component, OnInit } from '@angular/core';
import { ITheme } from 'src/app/interfaces/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes!: ITheme[];

  constructor(private themesService: ThemeService) {}

  ngOnInit(): void {
    this.themesService.getThemes().subscribe((themesArray) => {
      this.themes = themesArray;
    });
  }
}
