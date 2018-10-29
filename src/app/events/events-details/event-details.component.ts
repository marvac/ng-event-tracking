import { EventService } from './../shared/event.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent {

    event: IEvent
    addMode: boolean

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

    addSession(): void {
        this.addMode = true
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession(): void {
        this.addMode = false
    }

}