import { Component } from '@angular/core';
import { ItemModel } from '../../model/item.model';
import { DateFormat } from 'src/app/formatting/date.format';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  title = "Storage Items"
  subtitle = " "

  date = new Date()
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  dd = this.date.getDate()
  mm = this.months[this.date.getMonth()]
  yyyy = this.date.getFullYear()

  dateFormat=`${this.dd} ${this.mm} ${this.yyyy}`


  itemTang: ItemModel = new ItemModel({
    id: 1,
    itemName: "Tang Kombinasi",
    category: "developer",
    qty: 1,
    status: "available",
    update:this.dateFormat
  })

  itemObeng: ItemModel = new ItemModel({
    id: 2,
    itemName: "obeng impact +",
    category: "developer",
    qty: 1,
    status: "not available",
    update:this.dateFormat
  })

  itemList: ItemModel[] = [
    this.itemTang,
    this.itemObeng
  ]




}
