import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']

})
export class UpvoteComponent {
    @Input() set voted(value) {
        console.log(value)
        this.iconColor = value ? '#d9534f' : '#ffffff'
    }
    @Input() count: number
    @Output() vote = new EventEmitter()
    iconColor: string

    onClick(): void {
        this.vote.emit({})
    }
}