import { Component, Input, OnInit } from '@angular/core';
import { filter, Observable, take, map } from 'rxjs';
import { Trip, TripService } from '@demo-project/data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-project-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  @Input() isPremium = false;
  trips$!: Observable<Trip[]>;

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.trips$ = this.tripService.all()
                  .pipe(
                    take(1),
                    map(tags => tags.filter(tag => tag.premium === this.isPremium)));
  }

  selectTrip(trip: Trip): void {
    console.log(trip);
    this.router.navigate(['/detail', trip.id]);
  }
}
