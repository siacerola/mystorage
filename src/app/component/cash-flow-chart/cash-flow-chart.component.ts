import { Component, Input } from '@angular/core';
import{ faChartLine, faCoins, faDollarSign, faUsers } from'@fortawesome/free-solid-svg-icons'

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
  ApexStroke
} from 'ng-apexcharts'

import { RandomGenerator } from 'src/app/formatting/random.format';

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  dataLabels: ApexDataLabels
  yaxis: ApexYAxis
  grid: ApexGrid
  stroke:ApexStroke
}
@Component({
  selector: 'app-cash-flow-chart',
  templateUrl: './cash-flow-chart.component.html',
  styleUrls: ['./cash-flow-chart.component.css']
})
export class CashFlowChartComponent {

  // data from parent
  @Input() title = "lorem ipsum"
  // @param 1 rng for main number
  // @param 2 rng for gain number
  // @param 3 change icon card
  // @param 4 change format number
  @Input() nominal:number=0
  @Input() gainNominal:number = 0
  @Input() ic = 0
  @Input() mode:boolean = true

  // icon
  icon = [faDollarSign, faChartLine, faUsers, faCoins]

  randomNominal: RandomGenerator = new RandomGenerator(
    this.nominal
  )

  rng:number = this.randomNominal._nominal



  chartOptions :Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Revenue',
          data: [0, 0, 0, 1, 1, 0, 1]
        }
      ],
      chart: {
        type: 'area',
        height:"40%",
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
      stroke: {
        curve:'straight'
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
