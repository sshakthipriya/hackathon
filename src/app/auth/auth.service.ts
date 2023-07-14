import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'
import { tap } from 'rxjs/operators'
import { User } from './user.model';

interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered? : string

}

@Injectable({providedIn: 'root'})
export class AuthService {

    user = new Subject<User>()

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCK4yV1PYpOKFsK35VI7NZOp3uBNMB5U34', 
        {
            email: email,
            password:password, 
            returnSecureToken: true
        }).pipe(tap(resdata => {
            const expirationDate = new Date(new Date().getTime() + +resdata.expiresIn * 1000);
            const user = new User(
                resdata.email, 
                resdata.localId, 
                resdata.idToken,
                expirationDate
                );
            this.user.next(user);
        }));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCK4yV1PYpOKFsK35VI7NZOp3uBNMB5U34', 
        {
            email: email,
            password:password, 
            returnSecureToken: true
        });
    }

}