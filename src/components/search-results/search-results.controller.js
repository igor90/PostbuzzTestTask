class SearchResultsController {
  constructor($stateParams, CheapFlightsService, AirportsService) {
    this.$stateParams = $stateParams;
    this.CheapFlightsService = CheapFlightsService;
    this.AirportsService = AirportsService;
  }
  $onInit() {
    this.sortType = 'dateFrom';
    this.sortReverse = false;
    this.hideTable = true;
    this.hideMessage = false;

    this.CheapFlightsService.getAllTrips(this.$stateParams).success(results => {
      this.results = results.flights;
      if (this.results && this.results.length) {
        this.hideTable = false;
        this.hideMessage = false;
      } else {
        this.hideTable = true;
        this.hideMessage = true;
      }
    }).error(() => {
      console.log("It's some error of retrieving data. Please try later.");
    });

    this.searchInfo = this.$stateParams;

    this.AirportsService.getAllAirports()
      .success(results => {
        this.airports = results.airports;
        this.from = this.airports.find(airport => airport.iataCode === this.searchInfo.origin).name;
        this.to = this.airports.find(airport => airport.iataCode === this.searchInfo.dest).name;
      }).error(() => {
        console.log("It's some error of retrieving data. Please try later.");
      });
    this.dateFrom = this.searchInfo.originDate;
    this.dateTo = this.searchInfo.departureDate;
  }
}

SearchResultsController.$inject = ['$stateParams', 'CheapFlightsService', 'AirportsService'];

export default SearchResultsController;
