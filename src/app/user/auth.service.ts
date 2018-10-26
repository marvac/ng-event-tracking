import { IUser } from './user.model';
import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs'


@Injectable()
export class AuthService{
    currentUser: IUser

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Test',
            lastName: 'User'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }
}
