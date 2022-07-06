import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRIPS_FEATURE_KEY, TripsData, tripsAdapter } from './trips.reducer';

// Lookup the 'Trips' feature state managed by NgRx
export const getTripsState = createFeatureSelector<TripsData>(TRIPS_FEATURE_KEY);

const { selectAll, selectEntities } = tripsAdapter.getSelectors();

export const getTripsLoaded = createSelector(
  getTripsState,
  (state: TripsData) => state.loaded
);

export const getTripsError = createSelector(
  getTripsState,
  (state: TripsData) => state.error
);

export const getAllTrips = createSelector(getTripsState, (state: TripsData) =>
  selectAll(state)
);

export const getTripsEntities = createSelector(getTripsState, (state: TripsData) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getTripsState,
  (state: TripsData) => state.selectedId
);

export const getSelectedTrips = createSelector(
  getTripsState,
  (state: TripsData) => state.previouslyVisited
);

export const getSelected = createSelector(
  getTripsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
