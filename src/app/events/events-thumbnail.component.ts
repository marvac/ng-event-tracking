import { Component, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
    selector: 'event-thumbnail',
    template: `<div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
    <span class="text-info">{{event.location.address}}</span>
    <span class="pad-left">{{event.location.city}} ({{event.location.country}}</span>
    </div>
    <div class="container">

    </div>
</div>`,
styles:[`
    .pad-Left { margin-left: 10px; }
    .well div { color: #bbb; }

    `
]
})
export class EventThumbnailComponent {
    @Input() event:any
    @Output() eventClick = new EventEmitter()


}