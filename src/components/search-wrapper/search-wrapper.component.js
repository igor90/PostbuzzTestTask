import template from './search-wrapper.component.html';
import controller from './search-wrapper.controller';
import './search-wrapper.component.scss';

export const SearchWrapperComponent = {
  bindings: {
    originAirportCode: '<',
    destAirportCode: '<',
    selectOrigin: '&',
    selectDest: '&'
  },
  template,
  controller
};

export default SearchWrapperComponent;
