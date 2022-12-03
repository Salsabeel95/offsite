import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { Playground } from 'src/app/models/playground';
import { MyValidators } from 'src/app/validation/playgroundValidation';

@Component({
  selector: 'app-add-playground',
  templateUrl: './add-playground.component.html',
  styleUrls: ['./add-playground.component.scss']
})
export class AddPlaygroundComponent implements OnInit {


  ngOnInit(): void {
  }
  playgroundFormData: FormGroup;

  // current locale is key of the nzAutoTips
  // if it is not found, it will be searched again with `default`
  autoTips: Record<string, Record<string, string>> = {
    en: {
      required: 'Input is required'
    },
    default: {
      email: 'he input is not valid email'
    }
  };
  playgroundInfo!:Playground;
  submitForm(): void {
    if (this.playgroundFormData.valid) {
      this.playgroundInfo= Playground.factoryMethod(this.playgroundFormData.value)
      console.log('submit',this.playgroundInfo);
      console.log(this.fileList1);
      
    } else {
      Object.values(this.playgroundFormData.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.playgroundFormData.controls['confirm'].updateValueAndValidity());
  }

  confirmValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.playgroundFormData.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  formatterPound=(value:number):string=>`${value} LE`;
  parserPound=(value:string):string=>value.replace(` LE`,"");
  constructor(private fb: UntypedFormBuilder,private msg: NzMessageService) {
    
    // use `MyValidators`
    const { required, maxLength, minLength, email, mobile } = MyValidators;
    this.playgroundFormData = this.fb.group({
      ownerName: ['', [required, maxLength(12), minLength(3)]],
      playgroundName: ['', [required, maxLength(12), minLength(3)]/* , [this.playgroundNameAsyncValidator] */],
      mobile: ['', [required, mobile]],
      email: ['', [required, email]],
      password: ['', [required]],
      confirm: ['', [this.confirmValidator]],
      image: ['',],
      hourPrice: [1,],
      location: ['',],
      description: ['',],
      closingTime: [null,],
      openingTime: [null,],
    });
  }
  handleChange({ file, fileList }:any): void {

    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  fileList1:NzUploadFile[] = [];
}
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // playgroundNameAsyncValidator = (control: UntypedFormControl) =>
  //   new Observable((observer: Observer<MyValidationErrors | null>) => {
  //     setTimeout(() => {
  //       if (control.value === 'JasonWood') {
  //         observer.next({
  //           duplicated: {  en: `The username is redundant!` }
  //         });
  //       } else {
  //         observer.next(null);
  //       }
  //       observer.complete();
  //     }, 1000);
  //   });