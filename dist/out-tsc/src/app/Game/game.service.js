import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrowError } from 'rxjs';
let GameService = class GameService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    ;
    getCard() {
        debugger;
        return this.http.get(this.config.getAPIresult() + "/api/card").pipe(map((response) => {
            return response;
        }), catchError(this.handleError));
    }
    saveTransaction(transaction) {
        return this.http.post(this.config.getAPIresult() + "/api/transaction", transaction)
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        debugger;
        let errMsg;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return observableThrowError(errMsg);
    }
};
GameService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient, config])
], GameService);
export { GameService };
//# sourceMappingURL=game.service.js.map