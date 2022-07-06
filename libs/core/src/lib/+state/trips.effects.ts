import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { TripService } from 'libs/core/src/lib/services/trip.service';
import { of } from 'rxjs';

import { map, mergeMap, catchError } from 'rxjs/operators';
import * as TripsActions from './trips.actions';

@Injectable()
export class TripsEffects {
  getTrips$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TripsActions.loadTrips),
      mergeMap((action) => this.tripService.all()
      .pipe(
        map(trips => TripsActions.loadTripsSuccess({trips})),
        catchError((error) => of(TripsActions.loadTripsFailure({ error }))
      ))
      )
    )
  );
//   getTrip$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(TripsActions.SelectTripById),
//     mergeMap((action) => this.tripService.find(action.tripId)
//     .pipe(
//       map(trip => TripsActions.SelectTripByIdSuccess({trip})),
//       catchError((error) => of(TripsActions.SelectTripByIdFailure({ error }))
//     ))
//     )
//   )
// );
  constructor(private readonly actions$: Actions, private tripService: TripService
    ) {}
}
