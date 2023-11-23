import { Injectable } from '@angular/core';
import { Events } from '../Classes/events';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = "http://localhost:3000/events"
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http:HttpClient) { }
  getEvents():Observable<Events[]>{
    return this.http.get<Events[]>(URL);
  }
  addEvents(p:Events):Observable<Events>{
    return this.http.post<Events>(URL,p)
  }
  deleteEvents(id:number){
    return this.http.delete(URL+"/"+ id);
    }
  updateEvent(id:number, a:Events):Observable<Events>{
      return this.http.put<Events>(URL+"/"+id, a);
      }
}
