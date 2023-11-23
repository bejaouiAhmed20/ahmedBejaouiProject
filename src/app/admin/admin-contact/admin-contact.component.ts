import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Classes/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit{
  tab:Contact[]=[]
  constructor(private contactService:ContactService){}
  ngOnInit(): void {
    this.contactService.getContact().subscribe(
      data=>{
        this.tab=data
      }
    )
  }
  deleteConatct(id:number){
    this.contactService.deleteContact(id).subscribe(
      data=>{
        this.tab=this.tab.filter(e=>e.id!=id);
      }
    )

  }
}
