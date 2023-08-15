import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons'


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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  faUsers = faUsers

  title = "Total Customer"

  rng = Math.floor((Math.random() * 800_000) + 100_000)
  formatter = (this.rng).toLocaleString('en-US')
  gain = Math.floor((Math.random() * 11)+1)

  chartOptions :Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [57, 56, 61, 58, 63, 60, 66]
        },
      ],
      chart: {
        type: 'area',
        height: "auto",
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
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      }
    }
  }

}
