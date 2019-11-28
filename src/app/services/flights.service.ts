import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IResultParams } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {
  constructor(private _http: HttpClient) {}

  getFlights(params: IResultParams): Observable<{}> {
    const API_URL = `https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${params.departureCode}/to/${params.arriveCode}/${params.startDate}/${params.endDate}/250/unique/?limit=15&offset-0`
    return this._http.get(API_URL);
  }
}
