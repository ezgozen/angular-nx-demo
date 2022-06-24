import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip, TripService } from '@demo-project/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-project-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {
  trip$: Observable<Trip>;
  constructor(private route: ActivatedRoute, private tripService: TripService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.trip$ = this.tripService.find(id);
  }
}
