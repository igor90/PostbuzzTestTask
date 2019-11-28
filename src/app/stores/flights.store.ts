import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IResultParams } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FlightsStore {
  private dataSource = new BehaviorSubject<Object>({});
  public flightsList = this.dataSource.asObservable();

  constructor() {}

  updatedStore(params: IResultParams) {
    this.dataSource.next(params);
  }

}
