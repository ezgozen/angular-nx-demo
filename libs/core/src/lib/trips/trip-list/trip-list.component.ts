import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from '@demo-project/core';

@Component({
  selector: 'demo-project-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: [],
})
export class TripListComponent {
  @Input() trips: Trip[] = [];
  @Output() selected = new EventEmitter();
}
