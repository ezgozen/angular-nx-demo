import { Trip } from '@demo-project/core';
import { createAction, props } from '@ngrx/store';

export enum TripActionTypes {
  LoadTrips = '[Trips Page] Load Trips',
  LoadTripsSuccess = '[Trips API] Load Trips Success',
  LoadTripsFail = '[Trips API] Load Trips Failure',
  SelectTrips = '[Trip Detail Page] Select Trips',
  SelectTripById = '[Trip Detail Page] Select Trip By Id',
  SelectTripByIdSuccess = '[Trip Detail Page API] Select Trip By Id Success',
  SelectTripByIdFail = '[Trip Detail Page] Select Trip By Id Failure',
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

export const SelectTripById = createAction(TripActionTypes.SelectTripById,
  props<{ tripId: string }>());
export const SelectTripByIdSuccess = createAction(
  TripActionTypes.SelectTripByIdSuccess,
  props<{ trip: Trip }>()
);
export const SelectTripByIdFailure = createAction(
  TripActionTypes.SelectTripByIdFail,
  props<{ error: any }>()
);