import { Trip } from '@demo-project/core';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TripsActions from './trips.actions';

export const TRIPS_FEATURE_KEY = 'trips';

export interface TripsData extends EntityState<Trip> {
  previouslyVisited: Trip[];
  selectedId?: string | number; // which Trips record has been selected
  loaded: boolean; // has the Trips list been loaded
  error?: string | null; // last known error (if any)
}

export interface TripsPartialState { readonly [TRIPS_FEATURE_KEY]: TripsData; }

export const tripsAdapter: EntityAdapter<Trip> = createEntityAdapter<Trip>();

export const initialState: TripsData = tripsAdapter.getInitialState({
  previouslyVisited: [],
  error: '',
  selectedId: null,
  loaded: false,
});

const tripsReducer = createReducer(
  initialState,
  on(TripsActions.loadTrips, (state) => ({ ...state, loaded: false, error: null })),
  on(TripsActions.loadTripsSuccess, (state, { trips }) =>
    tripsAdapter.setAll(trips, { ...state, loaded: true })
  ),
  on(TripsActions.loadTripsFailure, (state, { error }) => 
    tripsAdapter.removeAll({ ...state, error })),


  on(TripsActions.selectTrips, (state, {trip}) => {
    const visited: Trip[] = [...state.previouslyVisited];
    const findTripIndex = visited.length > 0 ? visited.findIndex(t => t.id === trip.id) : -1;
    if (findTripIndex > -1) {
      visited.splice(findTripIndex, 1);
    }
    visited.push(trip);
    return {
      ...state,
      previouslyVisited: visited
    }
   }),

   on(TripsActions.SelectTripById, (state) => ({ ...state, loaded: false, error: null })),
   on(TripsActions.SelectTripByIdSuccess, (state, { trip }) => ({ ...state, loaded: true, trip })),
   on(TripsActions.SelectTripByIdFailure, (state, { error }) => 
     tripsAdapter.removeAll({ ...state, error })),
 
);

export function reducer(state: TripsData | undefined, action: Action) {
  return tripsReducer(state, action);
}
