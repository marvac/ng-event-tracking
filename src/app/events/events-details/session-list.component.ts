import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(filter: string) {

        let lowerFilter = filter.toLocaleLowerCase()

        if (lowerFilter === 'all') {
            //slice @ 0 creates a duplicate array
            this.visibleSessions = this.sessions.slice(0)
        }
        else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === lowerFilter).slice(0)
        }
    }
}