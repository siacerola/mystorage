export class DateFormat {
  private _date!: Date
  private _months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  /**
   * set date
   */
  public set date(date: Date) {
    this._date=date
  }

  public get dateFormat() {
    let dd = this._date.getDate()
    let mm = this._months[this._date.getMonth()]
    let yyyy=this._date.getFullYear()
    return `${dd} ${mm} ${yyyy}`
  }
}
