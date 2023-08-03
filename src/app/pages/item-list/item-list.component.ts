import { Component } from '@angular/core';
import { ItemModel } from '../../model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  itemTang: ItemModel = new ItemModel({
    id: 1,
    itemName: "Tang Kombinasi",
    category: "developer",
    qty: 1,
    status: "available",
    update:"2023-08-03"
  })

  itemObeng: ItemModel = new ItemModel({
    id: 2,
    itemName: "obeng impact +",
    category: "developer",
    qty: 1,
    status: "not available",
    update:"2023-08-02"
  })

  itemList: ItemModel[] = [
    this.itemTang,
    this.itemObeng
  ]

  date = new Date().toLocaleDateString()


}
