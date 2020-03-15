import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCreateComponent } from './players/players-create/players-create.component';
import { PlayersListComponent } from './players/players-list/players-list.component';


const routes: Routes = [
  { path: 'playercreation', component: PlayerCreateComponent},
  { path: 'playerslist', component: PlayersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [PlayerCreateComponent, PlayersListComponent];
