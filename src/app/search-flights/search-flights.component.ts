import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AirportsService } from '../services/airports.service';
import { FlightsStore, FlightInfoStore } from '../stores';

import { IAirport, IResultParams, IFlightInfo } from '../common/interfaces';


@Component({
  selector: 'search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss'],
  providers: [DatePipe]
})

export class SearchFlightsComponent implements OnInit {
  private routes: Object;
  public minDate: string;
  public startDate: string;
  public endDate: string;
  public originalAirportsList: Array<IAirport> = [];
  public airportsList: Array<IAirport> = [];
  public routesList: Array<IAirport> = [];

  public departure: IAirport;
  public arrive: IAirport;

  constructor(
    private _flightInfoStore: FlightInfoStore,
    private _flightsStore: FlightsStore,
    private _airportsService: AirportsService, 
    private _datePipe: DatePipe,
    private _activetedRoute: ActivatedRoute,
    private _router: Router) {
      let currentDate = new Date();
      this.minDate = this._datePipe.transform(currentDate, 'y-M-d');
      this.startDate = this.minDate;
  }

  ngOnInit() {          
    this._airportsService.getAirports().subscribe((result: {airports: Array<IAirport>, routes: any}) => {
      this.routes = result.routes;
      this.originalAirportsList = result.airports.map((item) => {
        return {name: item.name, iataCode: item.iataCode};
      });
      this.airportsList = [...this.originalAirportsList];

      this._activetedRoute.params.subscribe((params: IResultParams) => {
        if (params.departureCode && params.arriveCode) {
          let departure = this._findAirportByIata(params.departureCode);
          let arrive = this._findAirportByIata(params.arriveCode);
          this.startDate = params.startDate || this.startDate;
          this.endDate = params.endDate;
          this.aiportDepartureChange(departure);
          this.aiportArriveChange(arrive);

          this._sendFlightInfo();
        }
      });
    });
  }
 
  reverseAirports() {
    let newDep = { ...this.arrive };
    let newArr = { ...this.departure };
    this.aiportDepartureChange(newDep);
    this.aiportArriveChange(newArr);
  }

  aiportDepartureChange(airport: IAirport) {
    this.departure = airport;
    if (!airport.iataCode) {
      this.routesList = [];
    } else {
      this.routesList = this.airportsList.filter(airport => { 
        return this.routes[this.departure.iataCode].some(iata => iata === airport.iataCode); 
      });
      this.arrive = {} as IAirport;
      this.aiportArriveChange(this.arrive);
    }
  }

  aiportArriveChange(airport: IAirport) {
    this.arrive = airport;
  }

  searchFlights() {
    let params: IResultParams = {
      departureCode: this.departure.iataCode,
      arriveCode: this.arrive.iataCode,
      startDate: this.startDate,
      endDate: this.endDate
    }

    this._router.navigate(['results', params]);
    this._flightsStore.updatedStore(params);

    this._sendFlightInfo();
  }

  _findAirportByIata(iata: string): IAirport {
    return this.originalAirportsList.filter((item) => {
      return item.iataCode === iata;
    })[0];
  }

  _sendFlightInfo() {
    let flightInfo: IFlightInfo = {
      departure: this.departure.name,
      arrive: this.arrive.name,
      startDate: this.startDate,
      endDate: this.endDate
    }

    this._flightInfoStore.updatedStore(flightInfo);
  }
}
