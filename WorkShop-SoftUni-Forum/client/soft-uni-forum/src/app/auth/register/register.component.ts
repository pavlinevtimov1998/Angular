import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { emailValidator, passwordsMatching } from 'src/app/util/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordControl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  get passwordGroup(): FormGroup {
    return this.registerForm.controls['passwords'] as FormGroup;
  }

  registerForm: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl(null, [Validators.required, emailValidator]),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl(
        Validators.required,
        passwordsMatching(this.passwordControl)
      ),
    }),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  // TODO: Add register logic.

  registerHandler(): void {
    const { username, email, passwords } = this.registerForm.value;

    const body = {
      username,
      email,
      password: passwords.password,
      rePassword: passwords.rePassword,
    };

    this.userService.register$(body).subscribe((user) => {
      console.log(user);

      this.router.navigate(['/home']);
    });
  }

  errorValidator(value: string): boolean {
    return (
      this.registerForm.controls[value].touched &&
      this.registerForm.controls[value].invalid
    );
  }
}
