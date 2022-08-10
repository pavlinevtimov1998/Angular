import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemesComponent } from './themes/themes.component';
import { AsideComponent } from './aside/aside.component';
import { ThemesItemComponent } from './themes-item/themes-item.component';
import { UserService } from './user.service';
import { ThemesService } from './themes.service';
import { PostsService } from './posts.service';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemesComponent,
    AsideComponent,
    ThemesItemComponent,
    PostItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService, ThemesService, PostsService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
