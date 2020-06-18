import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Player } from './players/players-create/players-create.component';
import { catchError } from 'rxjs/operators';

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

  // getPlayer() {
  //   // The Observable returned by get() is of type Observable<string>
  //   // because a text response was specified.
  //   // There's no need to pass a <string> type parameter to get().
  //   return this.http.get(this.uri, {responseType: 'text'})
  //     .pipe(catchError(this.handleError('getPlayer', player))
  //       )
  //     );
  // }
  handleError(arg0: string, player: any): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  };

}
