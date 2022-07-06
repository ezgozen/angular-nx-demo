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

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'detail/:id', component: TripDetailComponent },
    ]),
    StoreModule.forFeature(fromTrips.TRIPS_FEATURE_KEY, fromTrips.reducer),
    EffectsModule.forFeature([TripsEffects]),
  ],
  declarations: [
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
    TripsComponent,
    TripListComponent,
    TripDetailComponent,
  ],
})
export class CoreModule {}
