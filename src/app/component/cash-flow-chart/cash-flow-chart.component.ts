import { Component, Input,OnInit } from '@angular/core';
import{ faChartLine, faCoins, faDollarSign, faUsers } from'@fortawesome/free-solid-svg-icons'
import * as ApexCharts from 'apexcharts';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
  ApexStroke
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  dataLabels: ApexDataLabels
  yaxis: ApexYAxis
  grid: ApexGrid
  stroke: ApexStroke
  colors: string[]
}

@Component({
  selector: 'app-cash-flow-chart',
  templateUrl: './cash-flow-chart.component.html',
  styleUrls: ['./cash-flow-chart.component.css']
})
export class CashFlowChartComponent implements OnInit{

  // data from parent
  @Input() title = ''
  @Input() nominal: number = 0
  @Input() gainNominal: number = 0
  @Input() ic: number = 0
  @Input() mode: boolean = true
  @Input() colors: string = ''

  currency = (value: boolean): string[] => {
    let located = 'id-ID'
    let option = {
      style: 'currency',
      currency:'IDR'
    }

    let main
    let gain

    if (value) {
      main = new Intl.NumberFormat(located, option).format(this.nominal)
      gain = new Intl.NumberFormat(located, option).format((this.gainNominal*0.01)*this.nominal)
      return [main,gain]
    } else {
      main = new Intl.NumberFormat(located).format(this.nominal)
      gain = new Intl.NumberFormat(located).format((this.gainNominal*0.01)*this.nominal)
      return [main,gain]
    }
  }

  // icon
  icon = [faDollarSign, faChartLine, faUsers, faCoins]

  chartOptions: Partial<ChartOptions>


  update() {
    this.chartOptions.colors = [this.colors]
    this.chartOptions.series = [
      {
        name: this.title,
        data:[0, 0, 0, 1, 1, 0, 1]
      }
    ]
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: `${this.title}`,
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
      colors:[`${this.colors}`],
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
  ngOnInit(): void {

    this.chartOptions.colors = [this.colors]
    this.chartOptions.series = [
      {
        name: this.title,
        data:[0, 0, 0, 1, 1, 0, 1]
      }
    ]
  }
}
