import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '@demo-project/data-models';

const ENDPOINT = 'http://localhost:3000/trips';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Trip[]>(ENDPOINT);
  }

  find(id: string) {
    return this.httpClient.get<Trip>(ENDPOINT + `/${id}`);
  }
  
  create(trip: Trip) {
    return this.httpClient.post(ENDPOINT, trip);
  }
  
  update(trip: Trip) {
    return this.httpClient.put(ENDPOINT + `/${trip.id}`, trip);
  }
  
  delete(trip: Trip) {
    return this.httpClient.delete(ENDPOINT + `/${trip.id}`);
  }
}
