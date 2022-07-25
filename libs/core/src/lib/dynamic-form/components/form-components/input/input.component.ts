import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { NewFormModel } from '../../../models/new-form';

@Component({
  selector: 'demo-project-input',
  templateUrl: './input.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent{
  errors: any = {};
  @Input() field!: NewFormModel;

  constructor(public controlContainer: ControlContainer) {}
  onChange() {
    const formGroup = this.controlContainer.control as FormGroup;
    this.errors = formGroup.controls[this.field.name].errors;
  }
}