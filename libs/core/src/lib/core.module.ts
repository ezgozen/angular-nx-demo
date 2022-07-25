import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripsComponent } from './trips/trips.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { MaterialModule } from './material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTrips from './+state/trips.reducer';
import { TripsEffects } from './+state/trips.effects';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { LoginDynamicFormComponent } from './login/login-dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'detail/:id', component: TripDetailComponent },
      { path: 'login', component: LoginDynamicFormComponent }
    ]),
    StoreModule.forFeature(fromTrips.TRIPS_FEATURE_KEY, fromTrips.reducer),
    EffectsModule.forFeature([TripsEffects]),
    DynamicFormModule
  ],
  declarations: [
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
    HeaderComponent,
    LoginDynamicFormComponent
  ],
  exports: [
    HeaderComponent,
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
    LoginDynamicFormComponent
  ],
})
export class CoreModule {}
