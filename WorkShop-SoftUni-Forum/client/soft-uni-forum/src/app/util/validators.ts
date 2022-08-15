import { AbstractControl, ValidationErrors } from '@angular/forms';

export const emailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (!/[A-Za-z\.]{6,}@gmail\.(bg|com)/.test(value)) {
    return {
      email: true,
    };
  }

  return null;
};

export const passwordsMatching = (passwordControl: AbstractControl) => {
  return (rePasswordControl: AbstractControl) => {
    if (passwordControl.value !== rePasswordControl.value) {
      return {
        notMatch: true,
      };
    }
    return null;
  };
};
