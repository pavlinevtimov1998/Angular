import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [ThemesComponent, ThemesListComponent],
  imports: [CommonModule],
  exports: [ThemesComponent],
})
export class ThemeModule {}
