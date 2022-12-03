import { formatDate } from '@angular/common';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: 'nz-time-pickerxx',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimeInputDirective,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: TimeInputDirective,
      multi: true
    }
  ]
})
export class TimeInputDirective implements ControlValueAccessor {
  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private _renderer: Renderer2
  ) {}

  @HostListener('input', ['$event.target.valueAsNumber'])
  onInput = (_: any) => {};

  writeValue(dateISOString: string): void {
    const UIValue = formatDate(dateISOString, 'HH:mm', 'en-IN');

    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      'value',
      UIValue
    );
  }
  registerOnChange(fn: (_: any) => void): void {
    this.onInput = (value: number) => {
      let valueTime= new Date(value)
      fn(this.getDate(valueTime).toLocaleTimeString());
    };
  }
  registerOnTouched(fn: any): void {}


  isValidDate(d: Date | number | null) {
    return !isNaN((d as unknown) as number);
  }

  getDate(date: Date) {
    if (date) {
      // const date = new Date(value);
      return this.isValidDate(date) ? date : { toLocaleTimeString: () => null };
    }
    return { toLocaleTimeString: () => null };
  }
}
