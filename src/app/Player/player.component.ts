import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { PlayerService } from './player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
})

export class PlayerCompoent implements OnInit {

    public header: string;
    public playerPage: FormGroup;
    public submitted = false;
    uuidValue: string;
    public playerName: string;
    public constructor(private formBuilder: FormBuilder, private router: Router,
        private playerService: PlayerService) { }

    ngOnInit(): void {
        localStorage.clear();
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
        localStorage.setItem("playerName", player.value.PlayerName);
        this.playerName = player.value.PlayerName;
        if (localStorage.getItem("SessionId") == null || localStorage.getItem("SessionId") === undefined) {
            this.generateSessionId();
            localStorage.setItem("SessionId", this.uuidValue);
        }
        //Save user name in player table
        this.savePlayerData();
    }

    //Save user name in player table
    async savePlayerData() {
        await this.playerService.savePlayer(this.playerName).subscribe(
            data => {
                var response = data;
                console.log(response);
                if (data.status == 200 || data.status == 204) {
                    
                    localStorage.setItem("PlayerId", data.json());

                    this.router.navigateByUrl("game");
                }
                else if (data.statusCode == 417) {
                    //Show Error here     
                }
            }
        )
    }

    generateSessionId() {
        this.uuidValue = UUID.UUID();
        return this.uuidValue;
    }

    reset() {
        this.playerPage.reset();
    }


}