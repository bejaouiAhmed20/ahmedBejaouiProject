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
  tabSerach:Events[] = []
  bool=true;
  constructor(private eventsService:EventsService){}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
    data=>{
      this.tab=data
    })
 }
 searchCheck(x:string){
  if(this.search(x)==0){
    alert("No Results ! ")
  }
 }
 search(x:string){
  for(let t of this.tab){
    if(x.toLocaleLowerCase()==t.destination.toLocaleLowerCase() || Number(x)==t.id ||x.toLocaleLowerCase()==t.id.toString()+t.destination.toLocaleLowerCase() ||x.toLocaleLowerCase()==t.destination.toLocaleLowerCase()+t.id.toString()){
      this.bool=false
      this.tabSerach.push(t)
    }
  }
  return this.tabSerach.length
}
back(){
  for(let t of this.tab){
    this.tabSerach.shift()
  }
  this.bool=true;
}
}