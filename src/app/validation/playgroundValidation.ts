import { Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { NzSafeAny } from "ng-zorro-antd/core/types";

// current locale is key of the MyErrorsOptions
export type MyErrorsOptions = {  en: string } & Record<string, NzSafeAny>;
export type MyValidationErrors = Record<string, MyErrorsOptions>;

export class MyValidators extends Validators {
  static override minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return { minlength: {  en: `MinLength is ${minLength}` } };
    };
  }

  static override maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return { maxlength: {  en: `MaxLength is ${maxLength}` } };
    };
  }

  static mobile(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value)? null : { mobile: {  en: `Mobile phone number is not valid` } };
  }
  static override email(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isEmail(value)? null : { mobile: {  en: `Email is not valid` } };
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /(^01[0125]\d{8}$)/.test(value);
}
function isEmail(value: string): boolean {
  return typeof value === 'string' && /^[a-zA-Z][\w.]+@(yahoo|gmail|hotmail)\.com$/.test(value);
}


