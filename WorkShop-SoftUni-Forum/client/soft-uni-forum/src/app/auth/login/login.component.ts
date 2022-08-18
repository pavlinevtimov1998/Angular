import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { emailValidator } from 'src/app/util/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  loginHandler(): void {
    const { email, password } = this.loginForm.value;

    const body = {
      email,
      password,
    };

    this.authService.login$(body).subscribe((user) => {
      this.router.navigate(['/home']);
    });
  }

  errorValidator(value: string): boolean {
    return (
      this.loginForm.controls[value].touched &&
      this.loginForm.controls[value].invalid
    );
  }
}
