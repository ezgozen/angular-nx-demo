import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/form-components/input/input.component';
import { FieldErrorsComponent } from './components/form-components/error/field-errors.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './components/main-form/form.component';
import { FormCoreComponent } from './components/main-form/form-core.component';
import { SelectComponent } from './components/form-components/select/select.component';
import { NgxdModule } from '@ngxd/core';



@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    FieldErrorsComponent,
    MainFormComponent,
    FormCoreComponent,
    MainFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxdModule
  ],
  exports: [FormCoreComponent, MainFormComponent],
})
export class DynamicFormModule { }
