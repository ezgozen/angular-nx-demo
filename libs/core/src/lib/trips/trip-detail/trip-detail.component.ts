import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getSelectedTrips, Trip, TripsPartialState } from '@demo-project/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'demo-project-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: [],
})
export class TripDetailComponent implements OnInit {
  trip$: Observable<Trip>;
  previouslyVisited$!: Observable<Trip[]>;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private store: Store<TripsPartialState>) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.trip$ = this.tripService.find(id);


    this.previouslyVisited$ = this.store.pipe(select(getSelectedTrips),
      map(trips => trips && trips.length > 0 ? (trips.length > 4 ? trips.slice(-4) : trips) : []));
  }
}
