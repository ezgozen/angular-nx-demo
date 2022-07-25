import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { Trip } from '@demo-project/core';
import { Router } from '@angular/router';
import { getAllTrips, getSelectedTrips } from '../+state/trips.selectors';
import { select, Store } from '@ngrx/store';
import { TripsPartialState } from '../+state/trips.reducer';
import { loadTrips, selectTrips, SelectedTripOnClick } from '../+state/trips.actions';

@Component({
  selector: 'demo-project-trips',
  templateUrl: './trips.component.html',
  styleUrls: [],
})
export class TripsComponent implements OnInit {
  @Input() isPremium = false;
  trips$!: Observable<Trip[]>;
  previouslyVisited$!: Observable<Trip[]>;
  previouslyVisited2$!: Observable<Trip[]>;

  constructor(
    private store: Store<TripsPartialState>,
    private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadTrips());
    // this.store.dispatch(SelectTripById({tripId:'1'}));

    this.trips$ = this.store.pipe(select(getAllTrips));
    this.previouslyVisited$ = this.store.pipe(select(getSelectedTrips),
      map(trips => trips?.length ? (trips.length > 4 ? trips.slice(-4) : trips) : []));

    this.previouslyVisited2$ = this.store.select(getSelectedTrips).pipe(
      filter(trips => Boolean(trips?.length)),
      map(trips => trips.slice(-4))
    )
  }

  selectTrip(trip: Trip): void {
    this.store.dispatch(SelectedTripOnClick({trip: trip}));
    this.store.dispatch(selectTrips({ trip: trip }));
    this.router.navigate(['/detail', trip.id]);
  }
}
