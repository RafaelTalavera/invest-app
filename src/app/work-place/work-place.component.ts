import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events/events.service';
import { Events } from '../events/events';



@Component({
  selector: 'app-work-place',
  templateUrl: './work-place.component.html',
  styleUrl: './work-place.component.css'
  
})
export class WorkPlaceComponent implements OnInit {

  events: Events[] = []; 

  constructor(
    private eventsService: EventsService
  ){ }

  ngOnInit(): void {
     this.eventsService.getEvents().subscribe(
      events => this.events = events
     );
      
  }
}
