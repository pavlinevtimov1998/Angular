import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemesComponent } from './themes/themes.component';
import { AsideComponent } from './aside/aside.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from '../pages/home/home.component';
import { futureRoutingModule } from '../futures.routing.module';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../pages/profile/profile.component';

@NgModule({
  declarations: [
    ThemesComponent,
    ThemesListComponent,
    AsideComponent,
    PostListComponent,
    HomeComponent,
    ThemeContentComponent,
    CreateThemeComponent,
    ProfileComponent
  ],
  imports: [CommonModule, futureRoutingModule, FormsModule],
  exports: [ThemesComponent],
})
export class ThemeModule {}
