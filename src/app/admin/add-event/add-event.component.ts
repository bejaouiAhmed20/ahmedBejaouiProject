import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events } from 'src/app/Classes/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  constructor(private eventsService:EventsService,private fb:FormBuilder){}
  tab:Events[]=[]
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(data=>{
      this.tab=data;
    })
    
  }
  loginForm:FormGroup=this.fb.nonNullable.group(
    {
      destination:[,[Validators.required,Validators.minLength(3)]],
      imgUrl:[,[Validators.required,]],
      price:[,[Validators.required]],
      date:[,[Validators.required]],
    }
  )
  randomnb():number {
    return Math.floor(Math.random()*1000);
  }
  loop(x:number){
    for (let t of this.tab){
      if(x==t.id){
        return true;
      }
    }
    return false;
  }
   idGenerater() {
    let x:number
    do{
      x = this.randomnb()
    }while(this.loop(x))
    return x
  }
  public get Destination(){
    return this.loginForm.get('destination')
  }
  public get ImgUrl(){
    return this.loginForm.get('imgUrl')?.value
  }
  public get Price(){
    return this.loginForm.get('price')?.value
  }
  public get Date(){
    return this.loginForm.get('date')?.value
  }
ajoutdata(){
  let tab=new Events(this.idGenerater(),this.Destination?.value,this.ImgUrl,true,new Date(this.Date),0,Number(this.Price))
  this.eventsService.addEvents(tab).subscribe(
    data=>{
      alert("Event Added !")
      location.reload();
    }
  )
}
}
