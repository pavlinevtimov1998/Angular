import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';
import { HomeComponent } from './home/home.component';
import { futureRoutingModule } from './futures.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, futureRoutingModule],
  exports: [ThemeModule],
})
export class FuturesModule {}
