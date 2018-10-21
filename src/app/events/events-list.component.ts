import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `<div>
    <h1>Upcoming Events</h1>
    <hr>
    <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Click</button>
</div>`
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '10/5/2018',
        time: '11:15 am',
        price: 499.95,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '555 West Dr.',
            city: 'London',
            country: 'England'
        }

    }

    // handleEventClicked(id:number){
    //     console.log("passed in " + id);
    // }

}