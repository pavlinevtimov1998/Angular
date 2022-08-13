import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { authRoutingModule } from './auth-router.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule, authRoutingModule
  ],
  exports:[LoginComponent,RegisterComponent]

})
export class AuthModule { }
