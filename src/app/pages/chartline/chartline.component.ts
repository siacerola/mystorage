import { Component } from '@angular/core';


@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})
export class ChartlineComponent {

  titleRevenue = 'revenue'
  nominal = 100_000
  gain = 11
  ic = 0
  mode=true


  titleProfit = 'total profit'
  profit = [10_000, 5, 1, 0]

  titleCustomer = 'total customer'
  customer = [100, 4, 2, 1]

  titleOrder = 'total orders'
  orders = [10, 10, 3, 1]



}
