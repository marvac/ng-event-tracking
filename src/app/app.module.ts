import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe
} from './events/index'

import {
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
  JQUERY_TOKEN,
  TOASTR_TOKEN,
  Toastr
} from './common/index'

let toastr: Toastr = window['toastr']
let jquery = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }

  return true;
}