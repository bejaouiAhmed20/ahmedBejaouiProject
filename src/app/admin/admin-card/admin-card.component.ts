import { Component, Input } from '@angular/core';
import { Events } from 'src/app/Classes/events';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent {
  @Input() tab!:Events
}
