import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core'
import { ISession, EventService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm {margin-right: 100px; }
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #f97924; }
    `]
})
export class NavBarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]

    constructor(public authService: AuthService, private eventService: EventService) {

    }

    searchSessions(): void {
        this.eventService.searchSessions(this.searchTerm).subscribe(sessions => {
            this.foundSessions = sessions
        })
    }
}