import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { createPasswordStrengthValidator } from '../form-template/password-strength.validator';

@Directive({
  selector: '[passwordStrength]',
  // this inform angular  that this is a special Directive for forms fileds validation
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors {
    return createPasswordStrengthValidator()(control);
    // createPasswordStrengthValidator() ==> this will return the function
    // createPasswordStrengthValidator()(control) ==> this will call the returned function with parmeter control
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
