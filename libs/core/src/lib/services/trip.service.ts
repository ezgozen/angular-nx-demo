import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '@demo-project/core';
import { EnvironmentConfig, ENV_CONFIG } from '../utils/environment-config.interface';
import { DataService } from './data.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  public isPremium: boolean;
  private serviceEndpoint = 'trips';

  constructor(
    private dataService: DataService,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
    ) {
      this.isPremium = config.environment.isPremium;
     }

  all(): Observable<Trip[]> {
    return this.dataService.all<Trip[]>(this.serviceEndpoint)
      .pipe(
        map(tags => tags.filter((trip: Trip) => trip.premium === this.config.environment.isPremium)));
  }

  find(id: string): Observable<Trip> {
    return this.dataService.find<Trip>(this.serviceEndpoint, id);
  }
  
  create(trip: Trip) {
    return this.dataService.create(this.serviceEndpoint, trip);
  }
  
  update(trip: Trip) {
    return this.dataService.update(this.serviceEndpoint, trip, trip.id);
  }
  
  delete(id: string): Observable<void> {
    return this.dataService.delete<void>(this.serviceEndpoint, id);
  }
}
