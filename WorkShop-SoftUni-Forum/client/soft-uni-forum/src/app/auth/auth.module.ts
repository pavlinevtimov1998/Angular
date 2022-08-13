import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { authRoutingModule } from './auth-router.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, authRoutingModule
  ],
  exports:[LoginComponent]

})
export class AuthModule { }
