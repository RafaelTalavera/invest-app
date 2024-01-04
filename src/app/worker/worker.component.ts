import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events/events.service'; 
import { Events } from '../events/events';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent implements OnInit {
  events: Events[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      events => this.events = events,
      error => console.error('Error fetching events:', error)
    );
  }
}


