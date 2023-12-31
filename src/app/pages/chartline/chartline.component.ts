import { Component } from '@angular/core';
import { RandomGenerator } from 'src/app/formatting/random.format';
import { SalesOrder } from 'src/app/model/SalesOrder.model';
import { faEllipsisVertical,faEllipsis ,faCalendar,faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})
export class ChartlineComponent {

  list = [1, 2, 3, 4]

  faElipseVertical =faEllipsisVertical
  faEllipsis=faEllipsis
  faCalendar=faCalendar
  faChevronDown=faChevronDown

  revenue: RandomGenerator = new RandomGenerator({
    icon: 0,
    title: 'revenue',
    nominal: 100_000,
    gain: 11,
    currency: true,
    color: '#60a5fa'
  })

  profit: RandomGenerator = new RandomGenerator({
    icon: 1,
    title: 'profit',
    nominal: 50_000,
    gain: 4,
    currency: true,
    color: '#60a5fa'
  })

  customer: RandomGenerator = new RandomGenerator({
    icon: 2,
    title: 'customer',
    nominal: 44_000,
    gain: 2,
    currency: false,
    color: '#60a5fa'
  })

  order: RandomGenerator = new RandomGenerator({
    icon: 3,
    title: 'order',
    nominal: 12_000,
    gain: 7,
    currency: false,
    color: '#60a5fa'
  })

  listCard: RandomGenerator[] = [
    this.revenue,
    this.profit,
    this.customer,
    this.order
  ]


  // header table
  headerList: string[] = [
    'SO',
    'Customer',
    'Product',
    'Status',
    'Price',
    'Deadline',
    'PIC',
    'Last update',
    'Days remaining'
  ]


  order1: SalesOrder = new SalesOrder(
    '2287PM3-2003',
    'Agus Triono',
    'part mesin 3kg prime',
    'laser',
    22_000_000,
    new Date(2023, 10, 12),
    'aris s',
    new Date(2023, 9, 15)
  )

  order2:SalesOrder= new SalesOrder(
    '1936P3-2023',
    'agus triono',
    'part cover utama',
    'bending',
    536_000,
    new Date(2023,9,9),
    'aris s',
    new Date(2023,8,12)
  )

  order3:SalesOrder=new SalesOrder(
    '1037-2023',
    'steda multi usaha',
    'roaster 3kg versi lama',
    'welding',
    27_750_000,
    new Date(2023,5,19),
    'aris s',
    new Date(2023,4,26)
  )

  order4:SalesOrder=new SalesOrder(
    '1037-2023',
    'steda multi usaha',
    'roaster 3kg versi lama',
    'assembling',
    27_750_000,
    new Date(2023,5,19),
    'aris s',
    new Date(2023,4,26)
  )

  order5:SalesOrder=new SalesOrder(
    '1037-2023',
    'steda multi usaha',
    'roaster 3kg versi lama',
    'painting',
    27_750_000,
    new Date(2023,5,19),
    'aris s',
    new Date(2023,4,26)
  )

  listSO: SalesOrder[] = [
    this.order1,
    this.order2,
    this.order3,
    this.order4,
    this.order5
  ]

}
