class AutocompleteController {
  $onInit() {
    this.showList = false;
  }
  $onChanges(changes) {
    if (changes.selectedAirport) {
      this.airport = this.selectedAirport && this.selectedAirport.name;
    }
  }
  filterAirports(value) {
    const search = value && value.toLowerCase();
    this.airports = this.airportsList.filter(airport => !search || airport.name.toLowerCase().startsWith(search));
    this.showList = true;
  }
  selectAirport(airportValue) {
    this.showList = false;
    this.airport = airportValue.name;
    this.onSelect({ selected: airportValue });
  }
  onFocus() {
    this.airports = this.airportsList;
    this.showList = true;
  }
  onBlur() {
    this.showList = false;
  }
}

AutocompleteController.$inject = [];

export default AutocompleteController;
