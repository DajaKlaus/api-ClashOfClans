import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClanComponent } from './clan/clan.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
    { path: 'player', component: PlayerComponent},
    { path: 'clan', component: ClanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
