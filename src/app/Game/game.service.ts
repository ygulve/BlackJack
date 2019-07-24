import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config/config';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError } from 'rxjs';

@Injectable()
export class GameService {

    constructor(private http: HttpClient, private config: config) { };

    getCard(): Observable<any> {
        return this.http.get(this.config.getAPIresult() + "/api/card").pipe(
            map((response) => {
                return response;

            }),
            catchError(this.handleError));
    }

    newGame(game): Observable<any> {
        let body = JSON.stringify(game);
        let options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json'),
        };

        return this.http.post(this.config.getAPIresult() + "api/game", body, options)
            .pipe(map(response => {
                return response;
            }),
                catchError(this.handleError));
    }

    saveTransaction(transaction): Observable<any> {
        let body = JSON.stringify(transaction);
        let options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json'),
        };

        return this.http.post(this.config.getAPIresult() + "api/transaction", body, options)
            .pipe(map(response => {
                return response;
            }),
                catchError(this.handleError));
    }

    SaveFinalResult(result): Observable<any> {
        let body = JSON.stringify(result);
        let options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json'),
        };

        return this.http.post(this.config.getAPIresult() + "api/result", body, options)
            .pipe(map(response => {
                return response;
            }),
                catchError(this.handleError));
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return observableThrowError(errMsg);
    }
}
