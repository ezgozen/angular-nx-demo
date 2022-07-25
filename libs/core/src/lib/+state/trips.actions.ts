import { Trip } from '@demo-project/core';
import { createAction, props } from '@ngrx/store';

export enum TripActionTypes {
  LoadTrips = '[Trips Page] Load Trips',
  LoadTripsSuccess = '[Trips API] Load Trips Success',
  LoadTripsFail = '[Trips API] Load Trips Failure',
  SelectTrips = '[Trip Detail Page] Select Trips',
  SelectedTripOnClick = '[Trip Detail Page] Select Trip By Id',
}

export const loadTrips = createAction(TripActionTypes.LoadTrips);
export const loadTripsSuccess = createAction(
  TripActionTypes.LoadTripsSuccess,
  props<{ trips: Trip[] }>()
);
export const loadTripsFailure = createAction(
  TripActionTypes.LoadTripsFail,
  props<{ error: any }>()
);

export const selectTrips = createAction(TripActionTypes.SelectTrips,
  props<{ trip: Trip }>());


export const SelectedTripOnClick = createAction(TripActionTypes.SelectedTripOnClick,
  props<{ trip: Trip }>());