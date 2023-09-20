export class SalesOrder {
  numberSO!: string
  customer!: string
  product!: string
  status!: string
  price!: number
  deadLine!: Date
  PIC!: string
  lastUpdate!: Date

  constructor(
    SO: string,
    customer: string,
    product: string,
    status: string,
    price: number,
    deadline: Date,
    pic: string,
    lastupdate: Date
  ) {
    this.numberSO = SO
    this.customer = customer
    this.product = product
    this.status = status
    this.price = price
    this.deadLine = deadline
    this.PIC = pic
    this.lastUpdate = lastupdate
  }
}
