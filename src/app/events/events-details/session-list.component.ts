import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSessions: ISession[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortSessions(this.sortBy)
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

    sortSessions(filter: string) {
        let lowerFilter = filter.toLocaleLowerCase()

        lowerFilter == "name" ?
            this.visibleSessions.sort(sortByNameAsc) :
            this.visibleSessions.sort(sortByVotesDesc)
    }
}

function sortByNameAsc(session1: ISession, session2: ISession) {
    if (session1.name > session2.name) {
        return 1
    }
    else if (session1.name === session2.name) {
        return 0
    }
    else {
        return -1
    }
}

function sortByVotesDesc(session1: ISession, session2: ISession) {
    return session2.voters.length - session1.voters.length
}