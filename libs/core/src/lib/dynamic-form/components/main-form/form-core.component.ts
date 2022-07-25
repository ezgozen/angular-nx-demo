import { Component, Input, OnInit, Type } from '@angular/core';
import { DynamicField } from '../../models/dynamic-field';
import { FieldTypeModel } from '../../models/field-type';
import { NewFormModel } from '../../models/new-form';
import { FormFactoryService } from '../../services/form-factory.service';

@Component({
  selector: 'demo-project-form-core',
  template: `<ng-template *ngxComponentOutlet="component"></ng-template>`,
})
export class FormCoreComponent implements OnInit {
  @Input() field!: NewFormModel;
  component;

  constructor(private formFactoryService: FormFactoryService) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  private loadComponent(): void {
    this.component = this.componentTypeFactory(this.field.inputType)
  }

  private componentTypeFactory(type: string): Type<DynamicField> {   
    let fieldType = '';
    
    switch (type) {
        case 'text-field':
            fieldType = 'input';
            break;
        case 'select':
            fieldType = "select";
            break;
        default:
            fieldType = 'input';
            break;
    } 
    const field = this.formFactoryService.fields.filter(
      (field: FieldTypeModel) => field.type === fieldType
    )[0];
    
    return field.component;
  }
}