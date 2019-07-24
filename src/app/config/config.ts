import { Injectable } from '@angular/core';

export enum message {
    "Game is in progress...",
    "Player wins, dealer looses",
    "Dealer wins, player looses",
    "Player bust, dealer wins",
    "Dealer bust, player wins",
    "Draw"
}

@Injectable()
export class config {
    private APIresult: string = "https://localhost:44344/"
    private msg = message;

    constructor() {


    }

    getMessage(item) {
        return this.msg[item];
    }

    public getAPIresult() {
        return this.APIresult;
    }




}