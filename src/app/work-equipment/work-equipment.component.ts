import { Component, OnInit } from '@angular/core';
import { Events } from '../events/events';
import { EventsService } from '../events/events.service';


@Component({
  selector: 'app-work-equipment',
  templateUrl: './work-equipment.component.html',
  styleUrl: './work-equipment.component.css'
})
export class WorkEquipmentComponent implements OnInit {

  events: Events[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      events => this.events = events,
      error => console.error('Error fetching events:', error)
    );
  }
}