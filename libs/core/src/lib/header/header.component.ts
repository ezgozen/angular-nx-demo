import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'demo-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() logo: string;
  @Output() clicked = new EventEmitter();
}
