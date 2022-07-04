import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Trip } from '@demo-project/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'demo-project-trips',
  templateUrl: './trips.component.html',
  styleUrls: [],
})
export class TripsComponent implements OnInit {
  @Input() isPremium = false;
  trips$!: Observable<Trip[]>;

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.trips$ = this.tripService.all();
                  // .pipe(map(tags => tags.filter(tag => tag.premium === this.isPremium)));
  }

  selectTrip(trip: Trip): void {
    console.log(trip);
    this.router.navigate(['/detail', trip.id]);
  }
}
