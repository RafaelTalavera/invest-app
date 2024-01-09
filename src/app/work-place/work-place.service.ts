import { Injectable } from '@angular/core';
import { WorkPlace } from './work-place';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class WorkPlaceService {

  private urlEndPoint: string = 'http://localhost:8080/api/events'

  constructor(private http: HttpClient) { }

  getWorkPlace(): Observable<WorkPlace[]> { 
    return this.http.get(this.urlEndPoint).pipe(
      map((response: any) => response as WorkPlace[])
    );
  }
}
