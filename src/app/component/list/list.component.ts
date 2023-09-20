import { Component, Input, OnInit } from '@angular/core';
import { SalesOrder } from 'src/app/model/SalesOrder.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() headerList: string[] = []
  @Input() list: SalesOrder[] = []

  ngOnInit(): void {
  }

  currency(value: number) {
    let locale = 'id-ID'
    let options = {
      style: 'currency',
      currency: 'IDR'
    }

    return new Intl.NumberFormat(locale, options).format(value)
  }

  dateFormat(value: Date) {
    let locale = 'en-US'
    let options: object = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }

    return value.toLocaleDateString(locale,options)
  }
}
