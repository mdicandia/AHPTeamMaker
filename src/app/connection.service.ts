import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Player } from './players/players-create/players-create.component';
import { catchError } from 'rxjs/operators';
import { Team } from './team/team-generator/team-generator.component';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  addPlayer(player: Player): Observable<any> {
    console.log(player);
    return this.http.post(`${this.BASE_URL}/players`, player, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  generateTeam(team: Team): Observable<any> {
    let params = new HttpParams().set("criterio", JSON.stringify(team));
    return this.http.get(`${this.BASE_URL}/team`, {params: params});
  }

  getPlayers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/players`);
  }
  handleError(arg0: string, player: any): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  };

}
