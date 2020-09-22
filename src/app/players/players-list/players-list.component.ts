import { Component, Input } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})

export class PlayersListComponent {
  skills=  {1:'Normal',3:'Buena',5:'Muy Buena',7:'Excelente',9:'Sobresaliente'};

  constructor(private connectionService: ConnectionService) { }
    @Input() players = [];
    ngOnInit() {
      this.connectionService.getPlayers().subscribe(
        jugadores => {this.players = jugadores.map(x => {return {
          name: x.name,
          position: x.position,
          pskills : this.skills[x.pskills],
          sskills : this.skills[x.sskills],
          ptskills : this.skills[x.ptskills],
          stskills : this.skills[x.stskills],
          rskills: this.skills[x.rskills],
          bskills: this.skills[x.bskills],
        }})}
      )
    }
}
