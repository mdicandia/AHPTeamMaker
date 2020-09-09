import { Component, Input } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent {

  constructor(private connectionService: ConnectionService) { }
    @Input() players = [];
    ngOnInit() {
      this.connectionService.getPlayers().subscribe(
        jugadores => {this.players = jugadores}
      )
    }
}
