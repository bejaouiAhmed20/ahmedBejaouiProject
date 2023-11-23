import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Classes/contact';
const URL="http://localhost:3000/contacts"
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http:HttpClient){}
  getContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(URL);
  }
  addContact(p:Contact):Observable<Contact>{
    return this.http.post<Contact>(URL,p)
  }
  deleteContact(id:number){
    return this.http.delete(URL+"/"+ id);
    }

    

}
