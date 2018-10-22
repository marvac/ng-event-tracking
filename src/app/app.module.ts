import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
