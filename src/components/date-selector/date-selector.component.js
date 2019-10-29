import template from './date-selector.component.html';
import controller from './date-selector.controller';

export const DateSelectorComponent = {
  bindings: {
    date: '<',
    onDateSelect: '&'
  },
  template,
  controller
};

export default DateSelectorComponent;
