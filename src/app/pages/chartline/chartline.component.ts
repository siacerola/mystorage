import { Component } from '@angular/core';
import { RandomGenerator } from 'src/app/formatting/random.format';


@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})
export class ChartlineComponent {

  list=[1,2,3,4]

  revenue: RandomGenerator = new RandomGenerator({
    icon: 0,
    title:'revenue',
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
    nominal: 4_000,
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


  headerList: string[] = [
    'name',
    'role',
    'division',
    'phone',
    'status'
  ]
}
