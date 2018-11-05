import { ISession } from './../shared/event.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
    let component: SessionListComponent
    let mockAuthService
    let mockVoterService

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService)
    });

    describe('ngOnChanges', () => {
        it('should filter sessions properly', () => {
            component.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' }
            ]

            component.filterBy = 'intermediate'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges()

            expect(component.visibleSessions.length).toBe(2)
        })

        it('should sort sessions properly', () => {
            component.sessions = <ISession[]>[
                { name: 'session C', level: 'intermediate' },
                { name: 'session B', level: 'intermediate' },
                { name: 'session A', level: 'beginner' }
            ]

            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges()

            expect(component.visibleSessions[2].name).toBe('session C')
        })
    })

})