import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import AirportsService from './services/airports.service';
import CheapFlightsService from './services/cheapflights.service';

angular.module('myApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.service('AirportsService', AirportsService)
.service('CheapFlightsService', CheapFlightsService)
.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    })
    .state('home.results', {
      url: '/results/:origin/:dest/:originDate/:departureDate/',
      template: '<search-results></search-results>',
    });
});
