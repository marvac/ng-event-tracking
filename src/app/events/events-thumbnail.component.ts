import { Component, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    styles: [`
    .yellow { color: #ffbb33 !important; }
    .red { color: #ff4444 !important; }
    .white { color: #fff !important; }
    .bold { font-style: bold; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail { min-height: 210px; }
    `
    ]
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    getTimeColorClass(){
        if (this.event && this.event.time <= '8:00 am'){
            return 'yellow bold'
        }
        else if (this.event && this.event.time >= '2:00 pm'){
            return 'red bold'
        }

        return 'white';
    }
}