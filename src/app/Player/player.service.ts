import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{config} from '../config/config';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError } from 'rxjs';
import { RequestOptions, Headers,Http } from '@angular/http';

@Injectable()
export class PlayerService{

    constructor(private http: Http, private config: config)
    {};

    savePlayer(playerName): Observable<any> {
        let body = JSON.stringify(playerName);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({            
            headers: headers
        });      
        return this.http.post(this.config.getAPIresult() + "api/player", body, options)
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