import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { CoreModule } from './core/core.module';
import { appRoutingModule } from './app-router.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PageModule } from './futures/pages/pages.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    CoreModule,
    ServicesModule,
    PageModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory(authService: AuthService) {
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
