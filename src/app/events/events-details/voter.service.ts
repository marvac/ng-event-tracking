import { Injectable } from "@angular/core";
import { ISession } from "../shared";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class VoterService {

    constructor(private http: HttpClient){

    }

    addVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName)
        const options = {headers: new HttpHeaders({'Content-Type:': 'application/json'})}
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        //no need to send any data besides the url
        this.http.post(url, {}, options)
        .pipe(catchError(this.handleError('addVoter')))
        .subscribe()
    }

    deleteVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter(v => v !== voterName)
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url)
        .pipe(catchError(this.handleError('deleteVoter')))
        .subscribe()
    }

    hasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(v => v === voterName)
    }

    private handleError<T> ( operation = "operation", result?: T){
        return (error: any): Observable<T> => {
          //just log the error for now
          console.error(error)
          return of(result as T)
        }
      }

}