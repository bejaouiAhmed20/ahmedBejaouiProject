import { Component, Input } from '@angular/core';
import { Events } from 'src/app/Classes/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.css']
})
export class EventcardComponent {
  @Input() tab!:Events
  etat=false
  constructor(private eventsService:EventsService){}
  bool(){
    this.etat=true
  }
  cancel(){
    this.etat=false
  }
  onModifier(a:Events){
    a.nbRejondre+=1
    this.eventsService.updateEvent(a.id, a).subscribe (
    data => {
    alert('You rejondre:) ')
  })
}}
