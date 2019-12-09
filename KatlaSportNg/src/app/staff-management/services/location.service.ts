import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { LocationListItem } from '../models/location-list-item';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url = environment.apiUrl + 'api/locations/';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Array<LocationListItem>> {
    return this.http.get<Array<LocationListItem>>(this.url);
  }

  getLocation(locationId: number): Observable<Location> {
    return this.http.get<Location>(`${this.url}${locationId}`);
  }

  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(this.url, location);
  }

  updateLocation(location: Location): Observable<Location> {
    return this.http.put<Location>(`${this.url}${location.id}`, location);
  }

  deleteLocation(locationId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${locationId}`);
  }
}
