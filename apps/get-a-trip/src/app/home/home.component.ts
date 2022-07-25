import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonFormData } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'demo-project-home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  public formData: JsonFormData;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('/assets/form.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }
}
