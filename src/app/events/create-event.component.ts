import { EventService } from './shared/event.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color:#e05c65; padding-left:10px;}
    .error input {background-color:#e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {

    newEvent: any
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit(): void {

    }

    saveEvent(formValues): void {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}