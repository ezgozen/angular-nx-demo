import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormFactoryService } from '../dynamic-form/services/form-factory.service';
import { NewFormModel } from '../dynamic-form/models/new-form';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'demo-project-login-form',
    template: `
    <div class="component-container">
        <div class="detail-component">
            <h2>Login</h2>
            <demo-project-form [form]="form" [fields]="fields"></demo-project-form>
            <button mat-raised-button color="primary" (click)="onSubmit()">Login</button>
            <button mat-raised-button color="warn" (click)="onReset()">Reset</button>
        </div>
    </div>
    <pre>{{ formOutput | json }}</pre>
  `,
})
export class LoginDynamicFormComponent implements OnInit {
    form!: FormGroup;
    fields: NewFormModel[] = [];
    formOutput: any;

    constructor(
        public formFactory: FormFactoryService,
        private httpClient: HttpClient,
        private router: Router
    ) { }
    ngOnInit() {
        this.httpClient.get('http://localhost:3000/controls').subscribe((formData: NewFormModel[]) => {
            this.fields = formData;

            this.form = this.formFactory.createForm(this.fields);
            this.formOutput = this.form.getRawValue();
        });
    }
    onSubmit() {
        this.formOutput = this.form.getRawValue();
        if(this.form.invalid) {
            return;
        }
        this.router.navigate(['/']);
    }
    onReset() {
        this.form.reset();
        this.formOutput = this.form.getRawValue();
    }
}