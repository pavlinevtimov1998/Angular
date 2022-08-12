import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { CoreModule } from './core/core.module';
import { AsideComponent } from './aside/aside.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [AppComponent, AsideComponent, ThemesComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
