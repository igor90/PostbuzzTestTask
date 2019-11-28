import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_GET_AIRPORTS:string = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {  
  constructor(private _http: HttpClient) {}

  getAirports(): Observable<{}> {
    return this._http.get(API_GET_AIRPORTS);
  }
}