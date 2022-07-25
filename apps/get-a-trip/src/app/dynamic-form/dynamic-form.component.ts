import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface JsonFormValidators {
  min?: number;
  max?: number;
  isRequired?: boolean;
  message: string;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
interface JsonFormControls {
  name: string;
  label: string;
  defaultValue: string;
  inputType: string;
  options?: JsonFormControlOptions;
  // required: boolean;
  config: {type: string};
  validations: JsonFormValidators [];
}
export interface JsonFormData {
  controls: JsonFormControls[];
}
@Component({
  selector: 'demo-project-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //whyyy
})
export class DynamicFormComponent implements OnChanges {
  @Input() jsonFormData: JsonFormData;
  public myForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.jsonFormData.firstChange) {
      this.createForm(this.jsonFormData.controls);
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      
      // for (const [key, value] of Object.entries(control.validations)) {
      for (const [key, value] of Object.entries(control.validations)) {
        if (value.isRequired) {
          validatorsToAdd.push({validator: Validators.required, message: value.message});
        }
        console.log(validatorsToAdd);

        // switch (key) {
        //   case 'min':
        //     validatorsToAdd.push(Validators.min(value));
        //     break;
        //   case 'max':
        //     validatorsToAdd.push(Validators.max(value));
        //     break;
        //   case 'isRequired':
        //     if (value) {
        //       validatorsToAdd.push(Validators.required);
        //     }
        //     break;
        //   case 'requiredTrue':
        //     if (value) {
        //       validatorsToAdd.push(Validators.requiredTrue);
        //     }
        //     break;
        //   case 'email':
        //     if (value) {
        //       validatorsToAdd.push(Validators.email);
        //     }
        //     break;
        //   case 'minLength':
        //     validatorsToAdd.push(Validators.minLength(value));
        //     break;
        //   case 'maxLength':
        //     validatorsToAdd.push(Validators.maxLength(value));
        //     break;
        //   case 'pattern':
        //     validatorsToAdd.push(Validators.pattern(value));
        //     break;
        //   case 'nullValidator':
        //     if (value) {
        //       validatorsToAdd.push(Validators.nullValidator);
        //     }
        //     break;
        //   default:
        //     break;
        // }
      }
      for (const v of validatorsToAdd) {
        console.log(v.validator);
        
        this.myForm.addControl(
          control.name,
          this.fb.control(control.defaultValue, v.validator)
        );
      }
      console.log(this.myForm);
      
    }
  }

  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }
  // form = new FormGroup({
  //   username: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  //   gender: new FormControl('2', [Validators.required])
  // });
   
  // get f(){
  //   return this.form.controls;
  // }
   
  // submit(){
  //   console.log(this.form.value);
  // }
}
