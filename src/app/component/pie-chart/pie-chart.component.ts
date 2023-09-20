import { Component } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ApexTheme

} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexNonAxisChartSeries
  chart: ApexChart
  responsive: ApexResponsive[]
  labels: any
  legend: ApexLegend
  theme:ApexTheme

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
        height: "auto",
        width:"100%"
      },
      theme:{
        monochrome:{
          enabled:true
        }
      },
      labels: ["Spreader", "Roaster Coffee", "Alat kesehatan", "Wastafel", "Show case"],
      responsive: [
        {
          options: {
            chart: {
              width: "auto",
            }
          }
        }
      ],
      legend: {
        show: true,
        position:'bottom'
      }

    };
  }
}
