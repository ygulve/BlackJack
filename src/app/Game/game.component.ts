import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GameService } from './game.service';
import { Tramsaction } from '../Model/transaction';
import { config } from '../config/config'
import { Card } from '../Model/card';
import { Game } from '../Model/game';
import { Player } from '../Model/player';
import { Result } from '../Model/result';
@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
})

export class GameComponent implements OnInit {

    public name: string;
    public gamePage: FormGroup;
    public card: [] = [];
    public originalCardList: [] = [];
    public playedCards: any[] = [];
    public suit: Observable<any>;
    public DealerPoints: number = 0;
    public PlayerPoints: number = 0;
    public playerStanding: boolean;
    public trans: Tramsaction;
    public Playerbust: boolean = false;
    public cardId: number;
    public Dealerbust: boolean;
    public DealerTotal: number = 0;
    public PlayerTotal: number = 0;
    public message: string;
    public PlayerWin: boolean = false;
    public DealerWin: Boolean = false;
    public DealerLost: boolean = false;
    public PlayerLost: boolean = false;
    public cardsPlayed: any[] = [];
    public cardsPlayedDeal: any[] = [];
    public isStay: boolean = false;
    public isStarted: boolean = false;
    public isDealerPlaying: boolean = false;
    public playAgain: boolean = false;
    public transaction: any[] = [];
    public isGameOver: boolean = false;
    public default: boolean = false;
    public finalResult: any[] = [];
    public GameNo: number = 0;
    public isNewGame: boolean = false;
    public GameId: number;
    public CardId: number;
    public objCard: Card;
    public objGame: Game;
    public objPlayer: Player;
    public result: Result;

    constructor(private formBuilder: FormBuilder, private gameService: GameService, private config: config) { }

    ngOnInit(): void {
        this.initializeForm();
        this.name = localStorage.getItem("playerName");
        this.objPlayer = new Player(+localStorage.getItem("PlayerId"), this.name);

        this.startGame();

        this.getCardDetails();
    }
    initializeForm() {
        this.gamePage = this.formBuilder.group({
            PlayerName: new FormControl('', [Validators.required])
        });
    }

    startGame() {
        if (this.GameNo == 0) {
            this.GameNo = this.GameNo + 1;
            this.objGame = new Game(0, this.GameNo, this.objPlayer.Player_Id);
            setTimeout(() => {
                this.SaveGame();
            }, 1200);
        }
    }

    //Set initial cards
    //2 for Player and 1 for Dealer
    setInitialCards() {
        this.playAgain = true;
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
        this.dealCard(false, true);
        this.dealCard(false, true);
        this.dealCard(true, true);
    }

    //Get 52 card details from database
    async getCardDetails() {
        if (!this.isGameOver) {
            this.default = true;
            this.message = this.config.getMessage(0);
        }
        //if the cards are already fetched from db for the first time then get it from Original list
        if (this.originalCardList.length > 0) {
            this.originalCardList.forEach(element => {
                this.card.push(element);
            });
            this.setInitialCards();
        }
        else {
            //This will fetch all the 52 cards from database
            await this.gameService.getCard().subscribe(data => {
                this.card = data;
                this.originalCardList = data;
                this.setInitialCards();
            });
        }
    }

    //Hit to draw a random card
    Hit() {
        this.startGame();
        this.isStarted = true;
        this.dealCard(false, false);
    }

    async SaveGame() {
        await this.gameService.newGame(this.objGame).subscribe(
            response => {
                var res = response;
                if (response != undefined) {
                    debugger;
                    this.GameId = res;

                    this.transaction.forEach(element => {
                        if (element["Game_Id"] == undefined || element["Game_Id"] == 0) {
                            element["Game_Id"] = this.GameId;
                        }
                    });
                }
                else if (response.statusCode == 417) {
                    //Show Error here     
                }
            }
        )
    }

    //Player Stay and dealer will start playing
    Stay() {
        this.startGame();

        if (this.PlayerTotal < this.DealerTotal) {
            this.resetValues();
            this.DealerWin = true;
            this.isGameOver = true;
            this.message = this.config.getMessage(2);
            this.GetResult();
        } else
            if (!this.isGameOver) {
                this.isStay = true;
                this.isDealerPlaying = true;
                this.playerStands();
            }
    }

    //It will start new game in same session 
    PlayAgain() {
        this.GameId = 0;
        this.GameNo = this.GameNo + 1;
        this.SaveGame();
        this.playAgain = true;
        this.isDealerPlaying = false;
        this.isStay = false;
        this.isStarted = true;
        this.resetValues();
        this.message = "";
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
        this.card = [];
        this.DealerPoints = 0;
        this.PlayerPoints = 0
        this.PlayerTotal = 0;
        this.DealerTotal = 0;
        this.playedCards = [];
        this.gamePage.reset();
        this.PlayerWin = false;
        this.DealerWin = false;
        this.DealerLost = false;
        this.PlayerLost = false;
        this.default = true;
        this.getCardDetails();
    }

    //Deal the card for Player and Dealer
    async dealCard(isForDealer: boolean, isfirst: boolean) {
        if (!isForDealer) {
            this.isDealerPlaying = false;
            this.playedCards.push(this.extractCardFromPack());
            this.PlayerTotal = 0;
            this.playedCards.forEach(element => {
                this.objCard = new Card(element["card_Id"], "", element["points"], 0);
                this.cardId = element["card_Id"];
                this.PlayerTotal = this.PlayerTotal + element["points"];
                this.PlayerPoints = element["points"];
            });
        }
        else {
            this.cardsPlayedDeal.push(this.extractCardFromPack());
            this.DealerTotal = 0;
            this.cardsPlayedDeal.forEach(element => {
                this.objCard = new Card(element["card_Id"], "", element["points"], 0);
                this.cardId = element["card_Id"];
                this.DealerTotal = this.DealerTotal + element["points"];
                this.DealerPoints = element["points"];
            });
        }

        if (!isForDealer) {
            this.trans = new Tramsaction(0, this.PlayerPoints, 0, localStorage.getItem("SessionId").toString(), this.message, this.cardId, this.GameId);
        }
        else {
            this.trans = new Tramsaction(0, 0, this.DealerPoints, localStorage.getItem("SessionId").toString(), this.message, this.cardId, this.GameId);
        }

        this.transaction.push(this.trans);

        if (isForDealer && !isfirst) {
            if (!this.isGameOver) {
                while (this.DealerTotal < 17 && this.DealerTotal <= this.PlayerTotal) {
                    await new Promise(resolve => setTimeout(() => resolve(), 1200)).then(() => this.dealCard(true, false));
                }
            }
        }

        if (this.PlayerTotal > 21) {
            this.resetValues();
            this.Playerbust = true;
            this.isGameOver = true;
            this.isStay = true;
            this.message = this.config.getMessage(3);
        }
        else if (this.DealerTotal > 21) {
            this.resetValues();
            this.Dealerbust = true;
            this.isGameOver = true;
            this.isDealerPlaying = false;
            this.message = this.config.getMessage(4);
        }
        if (this.isDealerPlaying == true && this.playedCards.length >= 2 && !this.isGameOver) {
            this.calculateResult();
        }
        if (this.isGameOver) {
            this.GetResult();
        }
    }

    //this is executed when the player stands
    playerStands(): void {
        this.playerStanding = true;
        this.dealCard(true, false);
    }

    //Extract random card from the pack
    extractCardFromPack() {
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

    //Calculate result
    calculateResult() {
        this.message = "";
        if (this.DealerTotal < this.PlayerTotal) {
            this.resetValues();
            this.PlayerWin = true;
            this.isGameOver = true;
            this.message = this.config.getMessage(1);
        }
        else if (this.isDealerPlaying && this.DealerTotal > this.PlayerTotal) {
            this.resetValues();
            this.DealerWin = true;
            this.isGameOver = true;
            this.message = this.config.getMessage(2);
        }
        else if (this.PlayerTotal == this.DealerTotal) {
            this.resetValues();
            this.DealerWin = true;
            this.isGameOver = true;
            this.message = this.config.getMessage(5);
        }

        if (this.isGameOver) {
            this.GetResult();
        }
    }

    //This will show the result in popup
    GetResult() {
        this.result = new Result(0, this.PlayerTotal, this.DealerTotal, this.GameId, this.message, this.GameNo);

        if (this.finalResult.length === 0) {
            this.finalResult.push(this.result);
        } else {
            var exisintgameNo = this.finalResult.filter(resultValue => resultValue.GameNo === this.GameNo);
            if (exisintgameNo.length === 0) {
                this.finalResult.push(this.result);
            }
        }
        this.isGameOver = false;

        console.log(this.finalResult);
    }

    resetValues() {
        this.default = false;
        this.playAgain = false;
        this.PlayerWin = false;
        this.DealerWin = false;
        this.Dealerbust = false;
        this.Playerbust = false;
    }

    //Open the result popup
    Report(id: string) {
        debugger;
        //Save this information into database
        this.gameService.saveTransaction(this.transaction).subscribe(data => {
        });

        this.gameService.SaveFinalResult(this.finalResult).subscribe(data => {
        });

        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    //Close the result popup
    Close(id: string) {
        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

}