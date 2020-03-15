import { Component } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {
  // players = [
  //   { name: 'manu ginobili', height: '6.6', position: 'sg'} ,
  //   { name: 'luka doncic', height: '6.8', position: 'sg' }
  // ];
    players = [];
}
