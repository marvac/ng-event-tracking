import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from '@angular/router'
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';

export const appRoutes: Routes = [
    //put this first so it gets processed before the ':id' route
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' }

]