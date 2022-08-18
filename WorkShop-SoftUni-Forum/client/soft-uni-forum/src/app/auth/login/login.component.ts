import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {
  MessageBusService,
  MessageType,
} from 'src/app/core/message-bus.service';
import { emailValidator } from 'src/app/util/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.required, emailValidator]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageBus: MessageBusService
  ) {}

  loginHandler(): void {
    const { email, password } = this.loginForm.value;

    const body = {
      email,
      password,
    };

    this.authService.login$(body).subscribe(() => {
      this.router.navigate(['/home']);

      this.messageBus.notifyForMessage({
        text: 'Successful login!',
        type: MessageType.Success,
      });
    });
  }

  errorValidator(value: string): boolean {
    return (
      this.loginForm.controls[value].touched &&
      this.loginForm.controls[value].invalid
    );
  }
}
