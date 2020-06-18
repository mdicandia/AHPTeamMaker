import { Component, EventEmitter, Output } from '@angular/core';
import { style } from '@angular/animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConnectionService } from 'src/app/connection.service';

interface Position {
  value: string;
  viewValue: string;
}

interface Skills {
  value: number;
  viewValue: string;
}

export interface Player {
  name: string;
  position: string;
  oskills: number;
  dskills: number;
  pskills: number;
  sskills: number;
  bskills: number;
  rskills: number;
}


@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.css']
})
export class PlayerCreateComponent {
  form: FormGroup;
  @Output() playercreated = new EventEmitter();
  positions: Position[] = [
    {value: 'pg-0', viewValue: 'PG'},
    {value: 'sg-1', viewValue: 'SG'},
    {value: 'sf-2', viewValue: 'SF'},
    {value: 'pf-3', viewValue: 'PF'},
    {value: 'c-4', viewValue: 'C'}
  ];
  skills: Skills[] = [
    {value: 1, viewValue: 'Pesima'},
    {value: 2, viewValue: 'Mala'},
    {value: 3, viewValue: 'Normal'},
    {value: 4, viewValue: 'Buena'},
    {value: 5, viewValue: 'Excelente'},
  ];

  constructor(private formBuilder: FormBuilder, private connectionService: ConnectionService) {

  };

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null],
      position: [],
      oskills: [],
      dskills: [],
      pskills: [],
      sskills: [],
      bskills: [],
      rskills: [],
    });
  }
  onSavePlayer() {

    let player: Player = {
      name: this.form.value.name, 
      position: this.form.value.position,
      oskills: this.form.value.oskills,
      dskills: this.form.value.dskills,
      pskills: this.form.value.pskills,
      sskills: this.form.value.sskills,
      bskills: this.form.value.bskills,
      rskills: this.form.value.rskills,
    }
    this.connectionService.addPlayer(player).subscribe(
      res => console.log(res)
    );
  }

}
