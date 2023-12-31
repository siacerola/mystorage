export class ItemModel {
  id!: number
  itemName!: string
  category!: string
  qty!: number
  status!: string
  update!:Date

  constructor(response: any) {
    this.id = response.id
    this.itemName = response.itemName
    this.category = response.category
    this.qty = response.qty
    this.status = response.status
    this.update = response.update
  }
}
