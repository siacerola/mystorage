import { Component, Input, OnInit } from '@angular/core';
import { SalesOrder } from 'src/app/model/SalesOrder.model';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() headerList: string[] = []
  @Input() list: SalesOrder[] = []

  faSort=faSort

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

    return value.toLocaleDateString(locale, options)
  }

  daysRemaining(startDate: any, lastUpdate: any) {
    let oneDay = 1_000 * 60 * 60 * 24
    return Math.round(Math.abs(startDate - lastUpdate) / oneDay)
  }

}
