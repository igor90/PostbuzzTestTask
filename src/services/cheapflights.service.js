class CheapFlightsService {
  constructor($http) {
    this.$http = $http;
  }
  
  getAllTrips(stateParams) {
    const url = `https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${stateParams.origin}/to/${stateParams.dest}/${stateParams.originDate}/${stateParams.departureDate}/250/unique/?limit=15&offset-0`;
    return this.$http.get(url);
  }
}

CheapFlightsService.$inject = ['$http'];

export default CheapFlightsService;
