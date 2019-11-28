import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightsService } from '../services/flights.service';
import { FlightsStore, FlightInfoStore } from '../stores';

import { IAirport, IResultParams, IFlightInfo } from '../common/interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  private _useInitFlights: boolean = true;
  private _flightParams: IResultParams;
  public flights: Array<IAirport> = [];
  public sortReverse: boolean = false;
  public sortType: string = 'dateFrom';
  public departure: string;
  public arrive: string;
  public startDate: string;
  public endDate: string;
  
  constructor(
    private _flightInfoStore: FlightInfoStore,
    private _flightsStore: FlightsStore,
    private _flightsService: FlightsService, 
    private route: ActivatedRoute
    ) {
      this.route.params.subscribe((params: IResultParams) => {
        this._flightParams = {...params};
      });

      this._flightsStore.flightsList.subscribe((params: IResultParams) => {
        this._flightParams = {...params};
        this._getFlights();
        this._useInitFlights = false;
      });

      this._flightInfoStore.flight.subscribe((params: IFlightInfo) => {
        this.departure = params.departure;
        this.arrive = params.arrive;
        this.startDate = params.startDate;
        this.endDate = params.endDate;
      });
  }

  ngOnInit() {
    if (this._useInitFlights) this._getFlights();
  }

  changeSorting(orderField: string) {
    this.sortType = orderField;
    this.flights = this.flights.sort((first, second) => {
      return (first[orderField] > second[orderField]) ? 1: ((second[orderField] > first[orderField]) ? -1 : 0);
    });

    this.sortReverse = !this.sortReverse;
    if (this.sortReverse) this.flights = this.flights.reverse();
  }

  _getFlights() {
    this._flightsService.getFlights(this._flightParams).subscribe((result: {flights: Array<IAirport>}) => {
      this.flights = [...result.flights];
    });
  }

}
