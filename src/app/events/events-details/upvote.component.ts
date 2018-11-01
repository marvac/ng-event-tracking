import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']

})
export class UpvoteComponent {
    @Input() voted: boolean
    @Input() count: number
    @Output() vote = new EventEmitter()

    onClick(): void {
        this.vote.emit({})
    }
}