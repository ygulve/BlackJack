import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from './game.service';
import { Tramsaction } from '../Model/transaction';
let GameComponent = class GameComponent {
    constructor(formBuilder, router, gameService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.gameService = gameService;
        this.card = [];
        this.playedCards = [];
        this.DealerPoints = 0;
        this.PlayerPoints = 0;
        this.playerHighestPoints = 0;
        this.playerCards = [];
        this.dealerCards = [];
        this.Playerbust = false;
        this.DealerTotal = 0;
        this.PlayerTotal = 0;
        this.lstheart = [];
        this.lstspads = [];
        this.lstclub = [];
        this.lstdiamond = [];
        this.lstdealheart = [];
        this.lstdealspads = [];
        this.lstdealclub = [];
        this.lstdealdiamond = [];
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
    }
    ngOnInit() {
        this.initializeForm();
        this.name = localStorage.getItem("playerName");
        this.getCardDetails();
        this.setInitialCards();
    }
    initializeForm() {
        this.gamePage = this.formBuilder.group({
            PlayerName: new FormControl('', [Validators.required])
        });
    }
    setInitialCards() {
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
        for (let i = 0; i < 2; i++) {
            debugger;
            console.log(i);
            setTimeout(() => this.dealCard(false), 600);
            if (i == 1) {
                setTimeout(() => this.dealCard(true), 600);
            }
        }
    }
    getCardDetails() {
        //This will fetch all the 52 cards from database
        this.gameService.getCard().subscribe(data => {
            this.card = data;
        });
    }
    Hit() {
        this.dealCard(false);
    }
    Stay() {
        this.playerStands();
    }
    PlayAgain() {
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
        this.card = [];
        this.DealerPoints = 0;
        this.PlayerPoints = 0;
        this.PlayerTotal = 0;
        this.DealerTotal = 0;
        this.playedCards = [];
        this.gamePage.reset();
        this.spades = false;
        this.diamond = false;
        this.clubs = false;
        this.hearts = false;
        this.dealspades = false;
        this.dealdiamond = false;
        this.dealclubs = false;
        this.dealhearts = false;
        this.lstspads = [];
        this.lstdealspads = [];
        this.lstheart = [];
        this.lstdealheart = [];
        this.lstclub = [];
        this.lstdealclub = [];
        this.lstdiamond = [];
        this.lstdealdiamond = [];
        this.getCardDetails();
        this.setInitialCards();
    }
    //this method is called also from the player componenet when the player clicks on deal card
    dealCard(isForDealer) {
        this.playedCards = [];
        if (!isForDealer) {
            this.playedCards.push(this.extractCardFromPack());
        }
        else {
            this.playedCards.push(this.extractCardFromPack());
        }
        //this.computePoints(this.playedCards, isForDealer);
        debugger;
        this.playedCards.forEach(element => {
            if (element["suit"]["name"] == "Spades") {
                let spadesvalue = {
                    card: "&spades;",
                    playerPoints: element["points"]
                };
                if (!isForDealer) {
                    this.PlayerTotal = this.PlayerTotal + element["points"];
                    this.lstspads.push(spadesvalue);
                    this.spades = true;
                    this.cardsPlayed.push(spadesvalue);
                }
                else {
                    this.DealerTotal = this.DealerTotal + element["points"];
                    this.lstdealspads.push(spadesvalue);
                    this.dealspades = true;
                    this.cardsPlayedDeal.push(spadesvalue);
                }
            }
            else if (element["suit"]["name"] == "Hearts") {
                let heartvalue = {
                    card: "&hearts;",
                    playerPoints: element["points"]
                };
                if (!isForDealer) {
                    this.PlayerTotal = this.PlayerTotal + element["points"];
                    this.lstheart.push(heartvalue);
                    this.hearts = true;
                    this.cardsPlayed.push(heartvalue);
                }
                else {
                    this.DealerTotal = this.DealerTotal + element["points"];
                    this.lstdealheart.push(heartvalue);
                    this.dealhearts = true;
                    this.cardsPlayedDeal.push(heartvalue);
                }
            }
            else if (element["suit"]["name"] == "Clubs") {
                let clubvalue = {
                    card: "&clubs;",
                    playerPoints: element["points"]
                };
                if (!isForDealer) {
                    this.PlayerTotal = this.PlayerTotal + element["points"];
                    this.lstclub.push(clubvalue);
                    this.clubs = true;
                    this.cardsPlayed.push(clubvalue);
                }
                else {
                    this.DealerTotal = this.DealerTotal + element["points"];
                    this.lstdealclub.push(clubvalue);
                    this.dealclubs = true;
                    this.cardsPlayedDeal.push(clubvalue);
                }
            }
            else if (element["suit"]["name"] == "Diamond") {
                let diamondvalue = {
                    card: "&diams;",
                    playerPoints: element["points"]
                };
                if (!isForDealer) {
                    this.PlayerTotal = this.PlayerTotal + element["points"];
                    this.lstdiamond.push(diamondvalue);
                    this.diamond = true;
                    this.cardsPlayed.push(diamondvalue);
                }
                else {
                    this.DealerTotal = this.DealerTotal + element["points"];
                    this.lstdealdiamond.push(diamondvalue);
                    this.dealdiamond = true;
                    this.cardsPlayedDeal.push(diamondvalue);
                }
            }
            console.log(this.cardsPlayed);
        });
        if (this.PlayerTotal > 21) {
            this.Playerbust = true;
            this.message = "Player Burst. Dealer wins";
        }
        if (this.DealerTotal > 0 && this.DealerTotal > 21) {
            this.Dealerbust = true;
            this.message = "Dealer Burst. Player wins";
        }
        if (this.DealerTotal > 0 && this.DealerTotal > 21)
            this.message = "Dealer Looses";
        else if (this.DealerTotal > this.PlayerTotal)
            this.message = "Dealer wins";
        else if (this.PlayerTotal == this.DealerTotal)
            this.message = "Draw";
        if (!isForDealer) {
            this.trans = new Tramsaction(0, this.PlayerPoints, 0, +localStorage.getItem("SessionId"), this.cardId, +localStorage.getItem("gameId"));
        }
        else {
            this.trans = new Tramsaction(0, 0, this.DealerPoints, +localStorage.getItem("SessionId"), this.cardId, +localStorage.getItem("gameId"));
        }
        //Save this information into database
        //this.gameService.saveTransaction(this.trans);
    }
    //this is executed when the player stands
    playerStands() {
        this.playerStanding = true;
        this.dealerAutomaticPlay();
    }
    dealerAutomaticPlay() {
        debugger;
        this.dealerHasToPlay = true;
        //step 1 check if there are players who still have to play. If all players were bust they all loose so we deal a new hand
        //let dealerHasToPlay: boolean = false;
        //save in a variable the player's highest points
        for (let player of this.playerCards) {
            if (!this.Playerbust && this.PlayerPoints < 22) {
                if (this.PlayerPoints > this.playerHighestPoints) {
                    this.playerHighestPoints = this.PlayerPoints;
                }
            }
            //if this player can still play, then the dealer has to wait
            // if (!this.Playerbust && !this.playerStanding && !this.PlayerBlackJack && (player.bankroll > 0 || player.currentBetValue > 0)) {
            //     dealerHasToPlay = false;
            //     break;
            // }
        }
        if (this.dealerHasToPlay) {
            //deal the mandatory second card for the dealer
            this.dealCard(true);
            if (this.message == null) {
                //and now call the AI which plays for the dealer
                this.dealerAutomaticPlayAI();
            }
            //after the dealer plays check who won
            // this.findWinners();
        }
    }
    //next function is the "brain" of the dealer.
    dealerAutomaticPlayAI() {
        if (this.Dealerbust || this.Dealerblackjack) {
            //don't do anything here
            return;
        }
        if (this.DealerPoints > this.playerHighestPoints) {
            //at this point the dealer won
            this.DealerWinnerOfRound = true;
        }
        else {
            this.dealCard(true);
            ///and now call again this function
            this.dealerAutomaticPlayAI();
        }
    }
    //this is a function which does the calculation of points
    //private computePoints(playerCards, dealerCards, isForDealer: boolean) {
    computePoints(cards, isForDealer) {
        debugger;
        let tempAces = [];
        //this.PlayerPoints = 0;
        //for (let card of playerCards) {
        for (let card of cards) {
            if (card.isAce) {
                tempAces.push(card);
            }
            // else if (card["points"] == 21) {
            //     this.PlayerPoints += card.blackjackValue;
            // }
            else {
                this.PlayerPoints += card["points"];
            }
        }
        if (tempAces.length && this.PlayerPoints < 21) {
            for (let aceCard of tempAces) {
                //try first with value 11
                this.PlayerPoints += 11;
                if (this.PlayerPoints > 21) {
                    //make the ace = 1;
                    this.PlayerPoints -= 10;
                }
                if (this.PlayerPoints > 21) {
                    break;
                }
            }
        }
        if (this.PlayerPoints > 21) {
            this.Playerbust = true;
            if (!isForDealer) {
                this.dealerAutomaticPlay();
            }
        }
        else if (this.PlayerPoints === 21) {
            //if (this.playerCards.length == 2) {
            if (cards.length == 2) {
                this.NaturalBlackjack = true;
            }
            this.PlayerBlackJack = true;
            if (!isForDealer) {
                this.dealerAutomaticPlay();
            }
        }
    }
    extractCardFromPack() {
        debugger;
        //step 1, extract a random card from the remaining ones in the pack
        let randomCardIndex = Math.floor(Math.random() * (this.card.length - 1)) + 0;
        let cardToReturn = this.card[randomCardIndex];
        if (cardToReturn === undefined) {
            cardToReturn = this.extractCardFromPack();
        }
        //remove the card from deck
        this.card.splice(randomCardIndex, 1);
        this.cardId = cardToReturn["card_Id"];
        return cardToReturn;
    }
};
GameComponent = tslib_1.__decorate([
    Component({
        selector: 'app-game',
        templateUrl: './game.component.html',
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Router,
        GameService])
], GameComponent);
export { GameComponent };
//# sourceMappingURL=game.component.js.map