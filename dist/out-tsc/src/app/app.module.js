import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCompoent } from './Player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './Game/game.component';
import { GameService } from './Game/game.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { config } from './config/config';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            PlayerCompoent,
            GameComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            HttpClientModule,
        ],
        providers: [GameService, config],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map