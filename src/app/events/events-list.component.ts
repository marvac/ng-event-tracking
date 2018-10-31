import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
declare let toastr

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

}