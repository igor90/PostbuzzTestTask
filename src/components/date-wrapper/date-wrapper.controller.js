class DateWrapperController {
  startDateSelect(select) {
    this.startDate = select;
    this.endDate = new Date(select);
    this.endDate.setDate(this.endDate.getDate() + 2);
    this.onEndDate({ date: this.endDate });
    this.onStartDate({ date: this.startDate });
  }
  endDateSelect(select) {
    this.endDate = select;
    this.startDate = new Date(select);
    this.startDate.setDate(this.startDate.getDate() - 2);
    this.onEndDate({ date: this.endDate });
    this.onStartDate({ date: this.startDate });
  }
}

export default DateWrapperController;
