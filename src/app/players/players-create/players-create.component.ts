import { Component, EventEmitter, Output } from '@angular/core';
import { style } from '@angular/animations';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConnectionService } from 'src/app/connection.service';

interface Position {
  value: string;
}

interface Skills {
  value: number;
  viewValue: string;
}

export interface Player {
  name: string;
  position: string;
  pskills: number;
  sskills: number;
  bskills: number;
  rskills: number;
  stskills: number;
  ptskills: number;
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
    {value: 'PG'},
    {value: 'SG'},
    {value: 'SF'},
    {value: 'PF'},
    {value: 'C'}
  ];
  skills: Skills[] = [
    {value: 1, viewValue: 'Normal'},
    {value: 3, viewValue: 'Buena'},
    {value: 5, viewValue: 'Muy Buena'},
    {value: 7, viewValue: 'Excelente'},
    {value: 9, viewValue: 'Sobresaliente'},
  ];

  constructor(private formBuilder: FormBuilder, private connectionService: ConnectionService) {

  };

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null],
      position: [],
      pskills: [],
      sskills: [],
      bskills: [],
      rskills: [],
      stskills: [],
      ptskills: []
    });
  }
  onSavePlayer() {

    let player: Player = {
      name: this.form.value.name, 
      position: this.form.value.position,
      pskills: this.form.value.pskills,
      sskills: this.form.value.sskills,
      bskills: this.form.value.bskills,
      rskills: this.form.value.rskills,
      stskills: this.form.value.stskills,
      ptskills: this.form.value.ptskills
    }
    this.connectionService.addPlayer(player).subscribe(
      res => console.log(res)
    );
    this.form.reset();
  }

}
