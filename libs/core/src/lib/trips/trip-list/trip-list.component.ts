import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Trip } from '@demo-project/core';

@Component({
  selector: 'demo-project-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: [],
})
export class TripListComponent implements OnChanges {
  @Input() trips: Trip[] = [];
  @Output() selected = new EventEmitter();
  pagedList = [];
  pageSize = 3;
  length = 0;

  ngOnChanges() {
    this.pagedList = this.trips.slice(0, 3);
    this.length = this.trips.length;
  }

  OnPageChange(event: PageEvent){
    console.log({ event });
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.trips.slice(startIndex, endIndex);
  }
}
