import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '@demo-project/core';
import { Observable } from 'rxjs';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'demo-project-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: [],
})
export class TripDetailComponent implements OnInit {
  trip$: Observable<Trip>;
  constructor(private route: ActivatedRoute, private tripService: TripService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.trip$ = this.tripService.find(id);
  }
}
