class HomeController {
  constructor(AirportsService, $state, $stateParams) {
    this.AirportsService = AirportsService;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
  $onInit () {
    this.errorList = ['Origin', 'Dest', 'originDate', 'departureDate'];
    if (this.$stateParams.origin) {
      this.originAirportCode = this.$stateParams.origin;
      this.removeError('Origin');
    }
    if (this.$stateParams.dest) {
      this.destAirportCode = this.$stateParams.dest;
      this.removeError('Dest');
    }
    if (this.$stateParams.originDate) {
      this.startDate = new Date(this.$stateParams.originDate);
      this.removeError('originDate');
    }
    if (this.$stateParams.departureDate) {
      this.endDate = new Date(this.$stateParams.departureDate);
      this.removeError('departureDate');
    }
  }
  originAirportSelect(item) {
    this.originAirportCode = item.iataCode;
    this.removeError('Origin');
  }
  destAirportSelect(item) {
    this.destAirportCode = item.iataCode;
    this.removeError('Dest');
  }
  startDateSelection(date) {
    this.startDate = date;
    this.removeError('originDate');
  }
  endDateSelection(date) {
    this.endDate = date;
    this.removeError('departureDate');
  }
  dateFormating(date) {
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1;
    const day = date.getDate();
    return year + "-" + (month) + "-" + day;
  }
  searchFlights() {
    this.originDate = this.dateFormating(this.startDate);
    this.departureDate = this.dateFormating(this.endDate);
    this.$state.go('home.results',
                    { origin: this.originAirportCode, dest: this.destAirportCode, originDate: this.originDate, departureDate: this.departureDate },
                    { reload: 'home.results' });
  }
  removeError(msg) {
    if (this.errorList.indexOf(msg) === -1) {
      this.errorList.push(msg);
    } else {
      const index = this.errorList.findIndex(errorMsg => errorMsg === msg);
      this.errorList.splice(index, 1);
    }
  }
}

HomeController.$inject = ['AirportsService', '$state', '$stateParams'];

export default HomeController;
