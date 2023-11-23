import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Classes/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  constructor(private contactService:ContactService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.contactService.getContact().subscribe(
      data=>{
        this.tab=data
    })
  }
  tab:Contact[]=[]
  contactForm:FormGroup= this.fb.nonNullable.group(
    {
      fullName:[,[Validators.required,Validators.minLength(5)]],
      email: [,[Validators.required,Validators.email]],
      message: [,[Validators.required,Validators.minLength(4)]],
    }
  )
  fullName!:string;
  email!:string;
  message!:string;
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
  
  addContact(){
    this.fullName=this.contactForm.get('fullName')?.value
    this.email=this.contactForm.get('email')?.value
    this.message=this.contactForm.get('message')?.value
    this.contactService.addContact(new Contact (this.idGenerater(),this.fullName,this.email,this.message)).subscribe(
      data=>{
        alert("Contact Added");
        this.contactForm.reset()
      }
    )
  }
  
}
