import template from './autocomplete.component.html';
import controller from './autocomplete.controller';
import './autocomplete.component.scss';

export const AutocompleteComponent = {
  bindings: {
    airportsList: '<',
    selectedAirport: '<',
    onSelect: '&'
  },
  template,
  controller,
};
export default AutocompleteComponent;
