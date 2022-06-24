import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from '@demo-project/data-models';

@Component({
  selector: 'demo-project-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
})
export class TripListComponent implements OnInit {
  @Input() trips: Trip[] = [];
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
