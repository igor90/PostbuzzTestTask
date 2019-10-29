import template from './date-wrapper.component.html';
import controller from './date-wrapper.controller';

export const DateWrapperComponent = {
  bindings: {
    startDate: '<',
    endDate: '<',
    onStartDate: '&',
    onEndDate: '&'
  },
  template,
  controller
};

export default DateWrapperComponent;
