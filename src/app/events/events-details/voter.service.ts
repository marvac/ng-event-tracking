import { Injectable } from "@angular/core";
import { ISession } from "../shared";

@Injectable()
export class VoterService {

    addVoter(session: ISession, voterName: string): void {
        session.voters.push(voterName)
    }

    deleteVoter(session: ISession, voterName: string): void {
        session.voters = session.voters.filter(v => v !== voterName)
    }

    hasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(v => v === voterName)
    }

}