import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemesComponent } from './themes/themes.component';
import { AsideComponent } from './aside/aside.component';
import { ThemesItemComponent } from './themes-item/themes-item.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemesComponent,
    AsideComponent,
    ThemesItemComponent,
  ],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
