import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events/events.service';
import { Events } from '../events/events';


@Component({
  selector: 'app-organizational',
  templateUrl: './organizational.component.html',
  styleUrl: './organizational.component.css'
})
export class OrganizationalComponent implements OnInit {

  events: Events[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      events => this.events = events,
      error => console.error('Error fetching events:', error)
    );
  }
}