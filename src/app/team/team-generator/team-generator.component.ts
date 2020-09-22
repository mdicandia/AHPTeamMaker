import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionService } from 'src/app/connection.service';

interface SattyScale {
  value: number;
  description: string;
}

interface tipoEquipo {
  value: string;
}


export interface Team {
  name: string;
  ofvsdef: number;
  passingvsshooting: number;
  postingvsshooting: number;
  postingvspassing: number;
  reboundingvsblocking: number;
  stealingvsblocking: number;
  stealingvsrebounding: number;
}

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.css']
})
export class TeamGeneratorComponent implements OnInit {
  form: FormGroup;
  arrayJugadores;
  @Output() teamcriteriasent = new EventEmitter();
  scale: SattyScale[] = [
    {value: 1/5, description: 'Importancia muy pequeña'},
    {value: 1/3, description: 'Importancia pequeña'},
    {value: 1, description: 'Igual Importancia'},
    {value: 3, description: 'Importancia Grande'},
    {value: 5, description: 'Importancia muy Grande'},
  ];

  tipo: tipoEquipo[] = [
    {value: 'Ofensivo'},
    {value: 'Defensivo'},
  ]

  constructor(private formBuilder: FormBuilder, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null],
      ofvsdef: [],                   
      passingvsshooting: [],
      postingvsshooting: [],
      postingvspassing: [],
      reboundingvsblocking: [],
      stealingvsblocking: [],
      stealingvsrebounding: []
    });
  }

  onGenerateTeam()
  {
    let team: Team = {
      name: 'nombre',
      ofvsdef: this.form.value.ofvsdef,
      passingvsshooting: this.form.value.passingvsshooting,
      postingvsshooting: this.form.value.postingvsshooting,
      postingvspassing: this.form.value.postingvspassing,
      reboundingvsblocking: this.form.value.reboundingvsblocking,
      stealingvsblocking: this.form.value.stealingvsblocking,
      stealingvsrebounding: this.form.value.stealingvsrebounding,
    }
    this.connectionService.generateTeam(team).subscribe(
      equipo => {this.arrayJugadores = equipo;}
    )

}
}
