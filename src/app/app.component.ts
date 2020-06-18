import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPlayers = [];

  onPlayerAdded(player)
 {
   this.storedPlayers.push(player);
 }
}
