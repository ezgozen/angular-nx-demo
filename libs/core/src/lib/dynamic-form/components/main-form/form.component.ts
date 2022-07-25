import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewFormModel } from '../../models/new-form';

@Component({
  selector: 'demo-project-form',
  template: ` <!-- * MAIN FORM -->
    <div [formGroup]="form" *ngIf="form">
      <ng-container *ngFor="let field of fields">
       <demo-project-form-core [field]="field"></demo-project-form-core>
      </ng-container>
    </div>`,
})
export class MainFormComponent {
  @Input() form!: FormGroup;
  @Input() fields: NewFormModel [];
}