import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexMarkers
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  stroke: ApexStroke
  legend: ApexLegend
  markers: ApexMarkers
  dataLabels:ApexDataLabels
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  title = "Monthly Sales"
  subtitle=""

  chartOptions :Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [57, 56, 61, 58, 63, 60, 66]
        },
      ],
      chart: {
        type: 'line',
        height:"auto",
        toolbar: {
          show:false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve:'stepline',
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      }
    }
  }

}
