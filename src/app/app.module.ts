import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }

  return true;
}