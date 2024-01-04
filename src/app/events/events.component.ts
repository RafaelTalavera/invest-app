import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { Events } from './events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Events[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      events => this.events = events,
      error => console.error('Error fetching events:', error)
    );
  }
}
