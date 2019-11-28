import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { IAirport } from '../../common/interfaces';

@Component({
  selector: 'dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})

export class DropdownInputComponent implements OnInit, OnChanges {
  public airportName: string;
  public showList: boolean;
  public currentList: Array<IAirport> = [];

  @Input() list: Array<IAirport> = [];
  @Input() airport: IAirport;
  @Output() airportChange = new EventEmitter();

  constructor() {  }

  ngOnInit() {
    this._createCurrentList();
  }

  ngOnChanges(changes) {
    if (changes.list) {
      this._createCurrentList();
    }
    if (changes.airport) {
      this.airportName = this.airport && this.airport.name;
    }
  }

  inputChanged(inputValue: string) {
    let inputValueTransformed = inputValue.toLowerCase();
    let selectedAirport = this.currentList.filter((airport) => {
      return airport.name.toLocaleLowerCase() === inputValueTransformed;
    })[0];
    let transformed: IAirport = {
      name: inputValue,
      iataCode: selectedAirport && selectedAirport.iataCode || '',
    }
    this.selectAirport(transformed);
  }

  selectAirport(airport: IAirport) {
    this.airportName = airport.name;
    this.airportChange.emit(airport);
  }

  filterList(inputValue: string) {
    inputValue = inputValue.toLowerCase();
    this.currentList = this.list.filter((airport) => {
      return airport.name.toLowerCase().indexOf(inputValue) >= 0;
    });
  }

  _createCurrentList() {
    this.currentList = [...this.list];
  }
}
