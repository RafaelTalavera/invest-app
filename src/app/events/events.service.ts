import { Injectable } from '@angular/core';
import { Events } from './events';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private urlEndPoint: string = 'http://localhost:8080/api/events'

  constructor(private http: HttpClient) { }

  getEvents():Observable<Events[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response: any) => response as Events[])
    );
  }
  

}
