import { Component } from '@angular/core';
import { RandomGenerator } from 'src/app/formatting/random.format';
import { SalesOrder } from 'src/app/model/SalesOrder.model';
import { DateFormat } from 'src/app/formatting/date.format';

@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})
export class ChartlineComponent {

  list = [1, 2, 3, 4]

  revenue: RandomGenerator = new RandomGenerator({
    icon: 0,
    title: 'revenue',
    nominal: 100_000,
    gain: 11,
    currency: true,
    color: '#22c55e'
  })

  profit: RandomGenerator = new RandomGenerator({
    icon: 1,
    title: 'profit',
    nominal: 50_000,
    gain: 4,
    currency: true,
    color: '#3b82f6'
  })

  customer: RandomGenerator = new RandomGenerator({
    icon: 2,
    title: 'customer',
    nominal: 44_000,
    gain: 2,
    currency: false,
    color: '#a855f7'
  })

  order: RandomGenerator = new RandomGenerator({
    icon: 3,
    title: 'order',
    nominal: 12_000,
    gain: 7,
    currency: false,
    color: '#ef4444'
  })

  listCard: RandomGenerator[] = [
    this.revenue,
    this.profit,
    this.customer,
    this.order
  ]


  // header table
  headerList: string[] = [
    'no so',
    'customer',
    'product',
    'status',
    'price',
    'deadline',
    'pic',
    'last update'
  ]


  order1: SalesOrder = new SalesOrder(
    '2287PM3-2003',
    'Agus Triono',
    'part mesin 3kg prime',
    'laser',
    22_000_000,
    new Date(2023, 9, 12),
    'aris setiawan',
    new Date(2023, 9, 15)
  )

  order2:SalesOrder= new SalesOrder(
    '1936P3-2023',
    'agus triono',
    'part cover utama',
    'laser',
    536_000,
    new Date(2023,8,9),
    'aris setiawan',
    new Date(2023,8,12)
  )

  listSO: SalesOrder[] = [
    this.order1,
    this.order2
  ]

}
