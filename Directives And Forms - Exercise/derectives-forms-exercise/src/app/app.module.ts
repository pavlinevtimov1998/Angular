import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenRegFormComponent } from './template-driven-reg-form/template-driven-reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenRegFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
