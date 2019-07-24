import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
let PlayerCompoent = class PlayerCompoent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.header = "Player";
        this.initializeForm();
    }
    initializeForm() {
        this.playerPage = this.formBuilder.group({
            PlayerName: new FormControl('', [Validators.required])
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.playerPage.controls;
    }
    submit(player) {
        console.log(player);
        debugger;
        localStorage.setItem("playerName", player.value.PlayerName);
        this.router.navigateByUrl("game");
        //Save user name in player table
    }
    reset() {
        this.playerPage.reset();
    }
};
PlayerCompoent = tslib_1.__decorate([
    Component({
        selector: 'app-player',
        templateUrl: './player.component.html',
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Router])
], PlayerCompoent);
export { PlayerCompoent };
//# sourceMappingURL=player.component.js.map