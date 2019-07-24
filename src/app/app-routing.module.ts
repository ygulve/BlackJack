import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCompoent } from './Player/player.component';
import { GameComponent } from './Game/game.component';

const routes: Routes = [
  {
    path:"",
    component:PlayerCompoent
  },
  {
    path:"game",
    component:GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
