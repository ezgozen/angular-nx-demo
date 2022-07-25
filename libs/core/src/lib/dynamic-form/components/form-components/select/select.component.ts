import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { NewFormModel } from '../../../models/new-form';

@Component({
  selector: 'demo-project-select',
  templateUrl: './select.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class SelectComponent {
  errors: any = {};
  @Input() field: NewFormModel;
  // @Output() handleChange = new EventEmitter<any>();

  constructor(public controlContainer: ControlContainer) {}
  onChangeValue(event) {
    const formGroup = this.controlContainer.control as FormGroup;
    this.errors = formGroup.controls[this.field.name].errors;
   // this.handleChange.emit(event.value);
  }
}