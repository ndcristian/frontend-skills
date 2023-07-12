import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null =>{
        const value = control.value;
        if(!value){
            return null;
        }
       const hasUpperCase = /[A-z]+/.test(value);
       const hasLowewrCase = /[a-z]+/.test(value);
       const hasNumeric = /[0-9]+/.test(value);

       const passwordValid = hasUpperCase && hasLowewrCase && hasNumeric;

       return !passwordValid ? {passwordStrength: true} : null;

    }
}
