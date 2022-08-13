import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';
import { futureRoutingModule } from './futures.routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ThemeModule],
})
export class FuturesModule {}
