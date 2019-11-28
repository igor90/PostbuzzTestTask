import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IFlightInfo } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FlightInfoStore {
  private dataSource = new BehaviorSubject<Object>({});
  public flight = this.dataSource.asObservable();

  constructor() { }

  updatedStore(params: IFlightInfo) {
    this.dataSource.next(params);
  }

}
