import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/Classes/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-allcard',
  templateUrl: './allcard.component.html',
  styleUrls: ['./allcard.component.css']
})
export class AllcardComponent implements OnInit {
  tab:Events[] = []
  EventItem!:Events
  bool=true;
  constructor(private eventsService:EventsService){}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
    data=>{
      this.tab=data
    })
 }
 searchCheck(x:string){
  if(!this.search(x)){
    alert("No Results ! ")
  }
 }
 search(x:string){
  for(let t of this.tab){
    if(x.toLowerCase()==t.destination.toLowerCase() || Number(x)==t.id){
      this.bool=false;
      this.EventItem=t
      return true
    }
  }
  return false
}
back(){
  this.bool=true;
}
}