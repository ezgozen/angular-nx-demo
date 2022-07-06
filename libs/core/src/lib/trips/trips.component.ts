import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '@demo-project/core';
import { Router } from '@angular/router';
import { getAllTrips, getSelectedTrips } from '../+state/trips.selectors';
import { select, Store } from '@ngrx/store';
import { TripsPartialState } from '../+state/trips.reducer';
import { loadTrips, selectTrips, SelectTripById } from '../+state/trips.actions';

@Component({
  selector: 'demo-project-trips',
  templateUrl: './trips.component.html',
  styleUrls: [],
})
export class TripsComponent implements OnInit {
  @Input() isPremium = false;
  trips$!: Observable<Trip[]>;
  previouslyVisited$!: Observable<Trip[]>;

  constructor(
    private store: Store<TripsPartialState>,
    private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadTrips());
   // this.store.dispatch(SelectTripById({tripId:'1'}));

    this.trips$ = this.store.pipe(select(getAllTrips));
    this.previouslyVisited$ = this.store.pipe(select(getSelectedTrips));
  }

  selectTrip(trip: Trip): void {
    this.store.dispatch(selectTrips({trip: trip}));
    this.router.navigate(['/detail', trip.id]);
  }
}
