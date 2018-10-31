import { CreateSessionComponent } from './events/events-details/create-session.component';
import { Error404Component } from './errors/404.component';
import { Routes } from '@angular/router'

import {
    EventsListComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    EventDetailsComponent

} from './events/index'

export const appRoutes: Routes = [
    //put this first so it gets processed before the ':id' route
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }

]