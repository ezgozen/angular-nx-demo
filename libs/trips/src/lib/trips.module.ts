import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips/trips.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { MaterialModule } from '@demo-project/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, HttpClientModule, RouterModule.forChild([{ path: 'detail/:id', component: TripDetailComponent }]),],
  declarations: [TripsComponent, TripListComponent, TripDetailComponent],
  exports: [TripsComponent, TripListComponent, TripDetailComponent]
})
export class TripsModule {}
