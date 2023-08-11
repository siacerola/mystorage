import { Component } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,

} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexNonAxisChartSeries
  chart: ApexChart
  responsive: ApexResponsive[]
  labels: any

}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  title = "Product Sales"
  subtitle=""

  chartOptions: Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        height:"auto"
      },
      labels: ["Spreader", "Roaster Coffee", "Alat kesehatan", "Wastafel", "Show case"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "auto",
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
