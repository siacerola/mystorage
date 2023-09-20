export class DateFormat {
  private _date!: Date
  private _months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  /**
   * set date
   */
  constructor(date: Date) {
    this._date = date
  }


  set date(date: Date) {
    this._date = date
  }

  get dateFormat(): Date {
    let dd = this._date.getDate()
    let mm = this._months[this._date.getMonth()]
    let yyyy = this._date.getFullYear()
    return this._date
  }
}
