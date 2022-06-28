import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { TripsComponent } from './trips/trips.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule, 
    RouterModule.forChild([{ path: 'detail/:id', component: TripDetailComponent }])
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
    TripDetailComponent
  ]
})
export class CoreModule {}