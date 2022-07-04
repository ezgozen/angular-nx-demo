import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoreModule, EnvironmentModule } from '@demo-project/core';
import { MaterialModule } from 'libs/core/src/lib/material/material.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    AppRoutingModule,
    EnvironmentModule.forRoot({ environment })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
