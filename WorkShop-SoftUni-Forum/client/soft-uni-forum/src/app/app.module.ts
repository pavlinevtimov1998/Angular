import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { CoreModule } from './core/core.module';
import { appRoutingModule } from './app-router.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './futures/theme/theme.module';
import { PageModule } from './futures/pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    CoreModule,
    ServicesModule,
    ThemeModule,
    AuthModule,
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
