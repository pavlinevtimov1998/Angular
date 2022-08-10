import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemesComponent } from './themes/themes.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemesComponent,
    AsideComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
