import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesComponent } from './themes/themes.component';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [ThemesComponent, ThemesListComponent, AsideComponent, PostListComponent],
  imports: [CommonModule],
  exports: [ThemesComponent],
})
export class ThemeModule {}
