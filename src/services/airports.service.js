class AirportsService {
  constructor($http) {
    this.$http = $http;
  }
  getAllAirports() {
    const url = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
    return this.$http.get(url);
  }
}

AirportsService.$inject = ['$http'];

export default AirportsService;
