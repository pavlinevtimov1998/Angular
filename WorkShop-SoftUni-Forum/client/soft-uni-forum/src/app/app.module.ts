import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { CoreModule } from './core/core.module';
import { FuturesModule } from './futures/futures.module';
import { appRoutingModule } from './app-router.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    CoreModule,
    ServicesModule,
    FuturesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
