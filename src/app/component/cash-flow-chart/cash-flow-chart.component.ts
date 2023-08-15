import { Component } from '@angular/core';
import{ faDollarSign, faPlus } from'@fortawesome/free-solid-svg-icons'

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  dataLabels: ApexDataLabels
  yaxis: ApexYAxis
  grid:ApexGrid
}
@Component({
  selector: 'app-cash-flow-chart',
  templateUrl: './cash-flow-chart.component.html',
  styleUrls: ['./cash-flow-chart.component.css']
})
export class CashFlowChartComponent {
  faDollarSign = faDollarSign
  faPlus = faPlus

  title = "Revenue"
  rng = Math.floor((Math.random() * 800_000) + 100_000)
  formatter = (this.rng).toLocaleString('en-US', {
    style: 'currency',
    currency:'USD'
  })
  gain = Math.floor((Math.random() * 11)+1)


  chartOptions :Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Revenue',
          data: [89, 95, 90, 101, 98, 105, 114]
        }
      ],
      chart: {
        type: 'area',
        height:"auto",
        width:"100%",
        toolbar: {
          show:false
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show:false
      },
      yaxis: {
        labels: {
          show:false
        }
      },
      xaxis: {
        labels: {
          show:false
        },
        categories: ['Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct'],
      }
    }
  }
}
