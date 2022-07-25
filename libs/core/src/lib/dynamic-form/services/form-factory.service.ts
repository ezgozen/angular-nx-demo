import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FieldTypeModel } from '../models/field-type';
import { InputComponent } from '../components/form-components/input/input.component';
import { NewFormModel } from '../models/new-form';
import { SelectComponent } from '../components/form-components/select/select.component';

@Injectable({
  providedIn: 'root',
})
export class FormFactoryService {
  private formFields: FieldTypeModel[] = [
    {
      type: 'input',
      component: InputComponent,
    },
    {
      type: 'select',
      component: SelectComponent,
    }
  ];

  constructor(private fb: FormBuilder) {}

  public get fields(): FieldTypeModel[] {
    return this.formFields;
  }

  createForm(fields: NewFormModel []): FormGroup {
    const form: FormGroup = this.fb.group({});

    fields.forEach((field: NewFormModel) => this.createField(field, form));
    return form;
  }
  
  private createField(field: NewFormModel, form: FormGroup) {
    const validators = [];
    let newControl;

    if (field) {
      // Create form control
      newControl = new FormControl(field.defaultValue ?? '');
      
      for (const [_, value] of Object.entries(field.validations)) {
        if (value?.isRequired) {
          validators.push(Validators.required);
        }
        if (value?.max) {
          validators.push(Validators.maxLength(value.max));
        }
        if (value?.min) {
          validators.push(Validators.minLength(value.min));
        }
      }
      // Set validators
      newControl.setValidators(validators);
      
      // Add control to form
      form.addControl(field.name, newControl);
    }
  };

  // getFormGroup(form: FormGroup, field: string): FormGroup {
  //   return form.get(field) as FormGroup;
  // }
}