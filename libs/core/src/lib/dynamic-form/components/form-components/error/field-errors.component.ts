import { Component, Input, OnChanges } from '@angular/core';
import { NewFormModel } from '../../../models/new-form';

@Component({
  selector: 'demo-project-field-errors',
  template: `<mat-error *ngIf="errors"> {{ errors.errorMessage }}</mat-error>`,
})
export class FieldErrorsComponent implements OnChanges {
  @Input() errors: any;
  @Input() field: NewFormModel;
  ngOnChanges(): void {
    if (this.errors?.required) {
      this.errors.errorMessage = this.field.validations.find((k,v) => k.isRequired).message;      
    }
    if (this.errors?.minlength) {
      this.errors.errorMessage = this.field.validations.find((k,v) => k.min).message;      
    }
    if (this.errors?.maxlength) {
      this.errors.errorMessage = this.field.validations.find((k,v) => k.max).message;      
    }
  }
}