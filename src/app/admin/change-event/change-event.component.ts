import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events } from 'src/app/Classes/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent implements OnInit{
  constructor(private eventsService:EventsService,private fb:FormBuilder){}
  bool=true;
  events :Events[]=[];
  EventItem! :Events;
  
    eventForm:FormGroup=this.fb.group({
      id: [,[Validators.required]],
      destination:[,[Validators.required,Validators.minLength(4)]],
      image:[,[Validators.required,Validators.minLength(4)]],
      etat:[,[Validators.required,Validators.minLength(4)]],
      date:[,[Validators.required]],
      nbRejondre:[,[Validators.required]],
      price:[,[Validators.required]],
    })

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      data=>{
        this.events=data;
      }
    )
  }
  edit(){
    this.eventForm.enable()
  }
  searchCheck(x:string){
    if(!this.search(x)){
      alert("No Results ! ")
    }
   }
   search(x:string){
    for(let t of this.events){
      if(x.toLocaleLowerCase()==t.destination.toLocaleLowerCase() || Number(x)==t.id){
        this.bool=false;
        this.EventItem=t
        if (this.EventItem) {
          this.eventForm.setValue({
            id: this.EventItem.id,
            destination: this.EventItem.destination,
            image: this.EventItem.image,
            etat: this.EventItem.etat,
            date: this.EventItem.date,
            nbRejondre: this.EventItem.nbRejondre,
            price: this.EventItem.price,
          })
          this.eventForm.disable()
        }
        console.log(this.eventForm)
        return true
      }
    }
    return false
  }
  back(){
    this.bool=true;
  }
  editEvent(){
    this.eventsService.updateEvent(this.EventItem.id,this.eventForm.value).subscribe(
      data=>{
        alert(`Event ${this.EventItem.id} Has Been Changed `)
        this.eventForm.disable()
      }
    )
  }
  delete(id:number){
    this.eventsService.deleteEvents(id).subscribe(
      data=>{
        this.events=this.events.filter(e=>e.id!=id);
      }
    )
  }
}
