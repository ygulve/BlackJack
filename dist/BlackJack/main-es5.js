(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Game/game.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Game/game.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer rounded\">\r\n  <div class=\"homecontainer color-dark rounded\">\r\n    <div class=\"homecol1\">\r\n      <h6>Play Game</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"buildcontainer color-light\">\r\n    <div class=\"col-md-16\">\r\n      <div class=\"homecol\">\r\n        <form [formGroup]=\"gamePage\">\r\n\r\n          <input type=\"button\" value=\"Hit\" [ngClass]=\"{disableButton: isStay}\" [disabled]=\"isStay\"\r\n            class=\"btnSubmitHit rounded\" (click)=\"Hit()\" />&nbsp;\r\n          <input type=\"button\" value=\"Stay\" [ngClass]=\"{disableButton: isStay}\" [disabled]=\"isStay\"\r\n            class=\"btnSubmitStay rounded\" (click)=\"Stay()\" />\r\n          <br><br>\r\n\r\n          <div class=\"gameContainerleft\">\r\n            <div class=\"gameHead\">{{name}}</div>\r\n            <div class=\"gameinnerContainer\">\r\n              <div *ngFor=\"let player of playedCards;let i=index;\">\r\n                <span class=\"suit\" [style.backgroundColor]=\"player.suit.color\"\r\n                  [innerHTML]=\"player.suit.name + ' ' + player.points\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"gamefooter\">\r\n              <div class=\"left\">\r\n                Points\r\n              </div>\r\n              <div class=\"right\">\r\n                {{PlayerTotal}}</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"gameContainerright\">\r\n            <div class=\"gameHead\">Dealer</div>\r\n            <div class=\"gameinnerContainer\">\r\n              <div *ngFor=\"let player of cardsPlayedDeal;let i=index;\">\r\n                <span class=\"suit\" [style.backgroundColor]=\"player.suit.color\"\r\n                  [innerHTML]=\"player.suit.name + ' ' + player.points\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"gamefooter\">\r\n              <div class=\"left\">\r\n                Points\r\n              </div>\r\n              <div class=\"right\">\r\n                {{DealerTotal}}</div>\r\n            </div>\r\n          </div> <br><br>\r\n\r\n\r\n          <input type=\"button\" value=\"Play Again\" [ngClass]=\"{disableButton: playAgain}\" [disabled]=\"playAgain\"\r\n            class=\"btnSubmitHit rounded\" #closeAddExpenseModal (click)=\"PlayAgain()\" />&nbsp;\r\n          <input type=\"button\" value=\"View Report\" class=\"btnSubmitStay rounded\" (click)=\"Report('myModal')\"\r\n            [ngClass]=\"{disableButton: playAgain}\" [disabled]=\"playAgain\" />\r\n\r\n\r\n          <div class=\"message\">\r\n            <div class=\"default\" *ngIf=\"default\">\r\n              {{message}}\r\n            </div>\r\n            <div class=\"playerWin\" *ngIf=\"PlayerWin\">\r\n              {{message}}\r\n            </div>\r\n            <div class=\"burst\" *ngIf=\"Playerbust\">\r\n              {{message}}\r\n            </div>\r\n            <div class=\"burst\" *ngIf=\"Dealerbust\">\r\n              {{message}}\r\n            </div>\r\n            <div class=\"dealerWin\" *ngIf=\"DealerWin\">\r\n              {{message}}\r\n            </div>\r\n            <div class=\"dealerLost\" *ngIf=\"DealerLost\">\r\n              {{message}}\r\n            </div>\r\n            <div class=\"draw\" *ngIf=\"Draw\">\r\n              {{message}}\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"myModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      Session Report\r\n    </div>\r\n    <div class=\"modal-body\">\r\n   \r\n      <table cellpadding=\"5\" style=\"width: 100%;text-align: center;\">\r\n        <tr class=\"trHeader\">\r\n          <td>Game No</td>\r\n          <td>Player Points</td>\r\n          <td>Dealer Points</td>\r\n          <td>Result</td>\r\n        </tr>\r\n        <tr *ngFor=\"let item of finalResult\">\r\n          <td>{{item.GameNo}}</td>\r\n          <td>{{item.PlayerPoints}}</td>\r\n          <td>{{item.DealerPoints}}</td>\r\n          <td>{{item.Result}}</td>\r\n        </tr>\r\n      </table>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <input type=\"button\" value=\"Close\" class=\"btnSubmitStay rounded\" (click)=\"Close('myModal')\">\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Player/player.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Player/player.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer rounded\">\r\n  <div class=\"homecontainer color-dark rounded\">\r\n    <div class=\"homecol1\">\r\n\r\n      <h6>Player</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"buildcontainer color-light\">\r\n    <div class=\"col-md-16\">\r\n      <div class=\"homecol\">\r\n        <form [formGroup]=\"playerPage\">\r\n          <div class=\"label-container\">\r\n            <label>Please enter player name</label>\r\n          </div>\r\n          <div class=\"txt-container\">\r\n            <input type=\"text\" class=\"form-control\" formControlName='PlayerName' placeholder=\"Player Name\" value=\"\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.PlayerName.errors }\" />\r\n            <div *ngIf=\"submitted && f.PlayerName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.PlayerName.errors.required\">Player Name is required</div>\r\n            </div>\r\n          </div> <br>\r\n          <div class=\"label-container\">\r\n          </div>\r\n          <div class=\"txt-container\">\r\n            <input type=\"submit\" class=\"btnSubmit rounded\" (click)=\"submit(playerPage)\" value=\"Submit\" /> &nbsp;\r\n            <input type=\"reset\" class=\"btnSubmit rounded\" value=\"Reset\" />\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/Game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.service */ "./src/app/Game/game.service.ts");
/* harmony import */ var _Model_transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/transaction */ "./src/app/Model/transaction.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");






var GameComponent = /** @class */ (function () {
    function GameComponent(formBuilder, gameService, config) {
        this.formBuilder = formBuilder;
        this.gameService = gameService;
        this.config = config;
        this.card = [];
        this.originalCardList = [];
        this.playedCards = [];
        this.DealerPoints = 0;
        this.PlayerPoints = 0;
        this.Playerbust = false;
        this.DealerTotal = 0;
        this.PlayerTotal = 0;
        this.PlayerWin = false;
        this.DealerWin = false;
        this.DealerLost = false;
        this.PlayerLost = false;
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
        this.isStay = false;
        this.isStarted = false;
        this.isDealerPlaying = false;
        this.playAgain = false;
        this.transaction = [];
        this.isGameOver = false;
        this.default = false;
        this.finalResult = [];
        this.GameNo = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.name = localStorage.getItem("playerName");
        this.getCardDetails();
    };
    GameComponent.prototype.initializeForm = function () {
        this.gamePage = this.formBuilder.group({
            PlayerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    //Set initial cards
    //2 for Player and 1 for Dealer
    GameComponent.prototype.setInitialCards = function () {
        this.playAgain = true;
        this.cardsPlayed = [];
        this.cardsPlayedDeal = [];
        this.dealCard(false, true);
        this.dealCard(false, true);
        this.dealCard(true, true);
    };
    //Get 52 card details from database
    GameComponent.prototype.getCardDetails = function () {
        var _this = this;
        if (!this.isGameOver) {
            this.default = true;
            this.message = this.config.getMessage(0);
        }
        //if the cards are already fetched from db for the first time then get it from Original list
        if (this.originalCardList.length > 0) {
            this.originalCardList.forEach(function (element) {
                _this.card.push(element);
            });
            this.setInitialCards();
        }
        else {
            //This will fetch all the 52 cards from database
            this.gameService.getCard().subscribe(function (data) {
                _this.card = data;
                _this.originalCardList = data;
                _this.setInitialCards();
            });
        }
    };
    //Hit to draw a random card
    GameComponent.prototype.Hit = function () {
        if (this.GameNo == 0) {
            this.GameNo = this.GameNo + 1;
        }
        this.isStarted = true;
        this.dealCard(false, false);
    };
    //Player Stay and dealer will start playing
    GameComponent.prototype.Stay = function () {
        if (this.GameNo == 0) {
            this.GameNo = this.GameNo + 1;
        }
        if (this.PlayerTotal < this.DealerTotal) {
            this.resetValues();
            this.DealerWin = true;
            this.isGameOver = true;
            this.message = this.config.getMessage(2);
            this.GetResult();
        }
        else if (!this.isGameOver) {
            this.isStay = true;
            this.isDealerPlaying = true;
            this.playerStands();
        }
    };
    //It will start new game in same session 
    GameComponent.prototype.PlayAgain = function () {
        this.GameNo = this.GameNo + 1;
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
        this.PlayerPoints = 0;
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
    };
    //Deal the card for Player and Dealer
    GameComponent.prototype.dealCard = function (isForDealer, isfirst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isForDealer) {
                            this.isDealerPlaying = false;
                            this.playedCards.push(this.extractCardFromPack());
                            this.PlayerTotal = 0;
                            this.playedCards.forEach(function (element) {
                                _this.PlayerTotal = _this.PlayerTotal + element["points"];
                                _this.PlayerPoints = element["points"];
                            });
                        }
                        else {
                            this.cardsPlayedDeal.push(this.extractCardFromPack());
                            this.DealerTotal = 0;
                            this.cardsPlayedDeal.forEach(function (element) {
                                _this.DealerTotal = _this.DealerTotal + element["points"];
                                _this.DealerPoints = element["points"];
                            });
                        }
                        if (!isForDealer) {
                            this.trans = new _Model_transaction__WEBPACK_IMPORTED_MODULE_4__["Tramsaction"](0, this.PlayerPoints, 0, +localStorage.getItem("SessionId"), this.cardId, +localStorage.getItem("gameId"));
                        }
                        else {
                            this.trans = new _Model_transaction__WEBPACK_IMPORTED_MODULE_4__["Tramsaction"](0, 0, this.DealerPoints, +localStorage.getItem("SessionId"), this.cardId, +localStorage.getItem("gameId"));
                        }
                        this.transaction.push(this.trans);
                        if (!(isForDealer && !isfirst)) return [3 /*break*/, 3];
                        if (!!this.isGameOver) return [3 /*break*/, 3];
                        _a.label = 1;
                    case 1:
                        if (!(this.DealerTotal < 17 && this.DealerTotal <= this.PlayerTotal)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 1200); }).then(function () { return _this.dealCard(true, false); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
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
                        if (this.isGameOver) {
                            this.GetResult();
                            debugger;
                            //Save this information into database
                            this.gameService.saveTransaction(this.transaction);
                        }
                        if (this.isDealerPlaying == true && this.playedCards.length >= 2 && !this.isGameOver) {
                            this.calculateResult();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //this is executed when the player stands
    GameComponent.prototype.playerStands = function () {
        this.playerStanding = true;
        this.dealCard(true, false);
    };
    //Extract random card from the pack
    GameComponent.prototype.extractCardFromPack = function () {
        //step 1, extract a random card from the remaining ones in the pack
        var randomCardIndex = Math.floor(Math.random() * (this.card.length - 1)) + 0;
        var cardToReturn = this.card[randomCardIndex];
        if (cardToReturn === undefined) {
            cardToReturn = this.extractCardFromPack();
        }
        //remove the card from deck
        this.card.splice(randomCardIndex, 1);
        this.cardId = cardToReturn["card_Id"];
        return cardToReturn;
    };
    //Calculate result
    GameComponent.prototype.calculateResult = function () {
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
    };
    //This will show the result in popup
    GameComponent.prototype.GetResult = function () {
        var _this = this;
        var result = {
            GameNo: this.GameNo,
            PlayerPoints: this.PlayerTotal,
            DealerPoints: this.DealerTotal,
            Result: this.message
        };
        if (this.finalResult.length === 0) {
            this.finalResult.push(result);
        }
        else {
            var exisintgameNo = this.finalResult.filter(function (resultValue) { return resultValue.GameNo === _this.GameNo; });
            if (exisintgameNo.length === 0) {
                this.finalResult.push(result);
            }
        }
        this.isGameOver = false;
    };
    GameComponent.prototype.resetValues = function () {
        this.default = false;
        this.playAgain = false;
        this.PlayerWin = false;
        this.DealerWin = false;
        this.Dealerbust = false;
        this.Playerbust = false;
    };
    //Open the result popup
    GameComponent.prototype.Report = function (id) {
        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    };
    //Close the result popup
    GameComponent.prototype.Close = function (id) {
        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
    GameComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
        { type: _config_config__WEBPACK_IMPORTED_MODULE_5__["config"] }
    ]; };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/Game/game.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _config_config__WEBPACK_IMPORTED_MODULE_5__["config"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/Game/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/Game/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");






var GameService = /** @class */ (function () {
    function GameService(http, config) {
        this.http = http;
        this.config = config;
    }
    ;
    GameService.prototype.getCard = function () {
        return this.http.get(this.config.getAPIresult() + "/api/card").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    GameService.prototype.saveTransaction = function (transaction) {
        debugger;
        var body = JSON.stringify(transaction);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({
            headers: headers
        });
        return this.http.post(this.config.getAPIresult() + "api/transaction", body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    GameService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    GameService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
        { type: _config_config__WEBPACK_IMPORTED_MODULE_2__["config"] }
    ]; };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _config_config__WEBPACK_IMPORTED_MODULE_2__["config"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/Model/transaction.ts":
/*!**************************************!*\
  !*** ./src/app/Model/transaction.ts ***!
  \**************************************/
/*! exports provided: Tramsaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tramsaction", function() { return Tramsaction; });
var Tramsaction = /** @class */ (function () {
    function Tramsaction(Transaction_Id, PlayerScore, DealerScore, Session_Id, Card_Id, Game_Id) {
        this.Transaction_Id = Transaction_Id;
        this.PlayerScore = PlayerScore;
        this.DealerScore = DealerScore;
        this.Session_Id = Session_Id;
        this.Card_Id = Card_Id;
        this.Game_Id = Game_Id;
    }
    Tramsaction.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number }
    ]; };
    return Tramsaction;
}());



/***/ }),

/***/ "./src/app/Player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/Player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerCompoent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCompoent", function() { return PlayerCompoent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player.service */ "./src/app/Player/player.service.ts");






var PlayerCompoent = /** @class */ (function () {
    function PlayerCompoent(formBuilder, router, playerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.playerService = playerService;
        this.submitted = false;
    }
    PlayerCompoent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.header = "Player";
        this.initializeForm();
    };
    PlayerCompoent.prototype.initializeForm = function () {
        this.playerPage = this.formBuilder.group({
            PlayerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    Object.defineProperty(PlayerCompoent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.playerPage.controls;
        },
        enumerable: true,
        configurable: true
    });
    PlayerCompoent.prototype.submit = function (player) {
        debugger;
        localStorage.setItem("playerName", player.value.PlayerName);
        this.playerName = player.value.PlayerName;
        if (localStorage.getItem("SessionId") == null || localStorage.getItem("SessionId") === undefined) {
            this.generateSessionId();
            localStorage.setItem("SessionId", this.uuidValue);
        }
        //Save user name in player table
        this.savePlayerData();
    };
    //Save user name in player table
    PlayerCompoent.prototype.savePlayerData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, this.playerService.savePlayer(this.playerName).subscribe(function (data) {
                                if (data.status == 200 || data.status == 204) {
                                    _this.router.navigateByUrl("game");
                                }
                                else if (data.statusCode == 417) {
                                    //Show Error here     
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerCompoent.prototype.generateSessionId = function () {
        this.uuidValue = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__["UUID"].UUID();
        return this.uuidValue;
    };
    PlayerCompoent.prototype.reset = function () {
        this.playerPage.reset();
    };
    PlayerCompoent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] }
    ]; };
    PlayerCompoent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/index.js!./src/app/Player/player.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]])
    ], PlayerCompoent);
    return PlayerCompoent;
}());



/***/ }),

/***/ "./src/app/Player/player.service.ts":
/*!******************************************!*\
  !*** ./src/app/Player/player.service.ts ***!
  \******************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");






var PlayerService = /** @class */ (function () {
    function PlayerService(http, config) {
        this.http = http;
        this.config = config;
    }
    ;
    PlayerService.prototype.savePlayer = function (playerName) {
        var body = JSON.stringify(playerName);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({
            headers: headers
        });
        return this.http.post(this.config.getAPIresult() + "api/player", body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    PlayerService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"] },
        { type: _config_config__WEBPACK_IMPORTED_MODULE_2__["config"] }
    ]; };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _config_config__WEBPACK_IMPORTED_MODULE_2__["config"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player/player.component */ "./src/app/Player/player.component.ts");
/* harmony import */ var _Game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game/game.component */ "./src/app/Game/game.component.ts");





var routes = [
    {
        path: "",
        component: _Player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerCompoent"]
    },
    {
        path: "game",
        component: _Game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BlackJack';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player/player.component */ "./src/app/Player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Game/game.component */ "./src/app/Game/game.component.ts");
/* harmony import */ var _Game_game_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Game/game.service */ "./src/app/Game/game.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
/* harmony import */ var _app_Player_player_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/Player/player.service */ "./src/app/Player/player.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerCompoent"],
                _Game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_Game_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"], _config_config__WEBPACK_IMPORTED_MODULE_11__["config"], _app_Player_player_service__WEBPACK_IMPORTED_MODULE_12__["PlayerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: message, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message", function() { return message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var message;
(function (message) {
    message[message["Game is in progress..."] = 0] = "Game is in progress...";
    message[message["Player wins, dealer looses"] = 1] = "Player wins, dealer looses";
    message[message["Dealer wins, player looses"] = 2] = "Dealer wins, player looses";
    message[message["Player bust, dealer wins"] = 3] = "Player bust, dealer wins";
    message[message["Dealer bust, player wins"] = 4] = "Dealer bust, player wins";
    message[message["Draw"] = 5] = "Draw";
})(message || (message = {}));
var config = /** @class */ (function () {
    function config() {
        this.APIresult = "https://localhost:44344/";
        this.msg = message;
    }
    config.prototype.getMessage = function (item) {
        return this.msg[item];
    };
    config.prototype.getAPIresult = function () {
        return this.APIresult;
    };
    config = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], config);
    return config;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Assessment\BlackJack\BlackJack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map