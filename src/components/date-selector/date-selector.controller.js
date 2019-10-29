class DateSelectorController {
  $onInit () {
    this.date = this.date ? new Date(this.date) : null;
  }
  selectDate() {
    this.onDateSelect({ date: this.date });
  }
}

export default DateSelectorController;
