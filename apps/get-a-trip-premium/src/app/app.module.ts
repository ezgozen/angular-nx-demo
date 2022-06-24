import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@demo-project/material';
import { UiHeaderModule } from '@demo-project/ui-header';
import { HomeComponent } from './home/home.component';
import { TripsModule } from '@demo-project/trips';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiHeaderModule,
    AppRoutingModule,
    TripsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
