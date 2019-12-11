import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Position } from '../models/position';
import { PositionListItem } from '../models/position-list-item';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private url = environment.apiUrl + 'api/positions/';

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Array<PositionListItem>> {
    return this.http.get<Array<PositionListItem>>(`${this.url}/show`);
  }

  getPosition(positionId: number): Observable<Position> {
    return this.http.get<Position>(`${this.url}/show/${positionId}`);
  }

  addPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(`${this.url}/create`, position);
  }

  updatePosition(position: Position): Observable<Position> {
    return this.http.post<Position>(`${this.url}/update/${position.id}`, position);
  }

  deletePosition(positionId: number): Observable<Position> {
    return this.http.post<Position>(`${this.url}/destroy/${positionId}`, null);
  }
}
