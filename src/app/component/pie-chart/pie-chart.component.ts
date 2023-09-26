import { Component, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend,
  ApexPlotOptions,

} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexNonAxisChartSeries
  chart: ApexChart
  responsive: ApexResponsive[]
  labels: any
  legend: ApexLegend
  colors:string[]
  plotOptions:ApexPlotOptions
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  title = "Product Sales"
  subtitle = ""


  chartOptions: Partial<ChartOptions>

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        height: "300",
        width: "100%"
      },
      colors:['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
      // plotOptions:{
      //   pie:{
      //     donut:{
      //       size:"90%"
      //     }
      //   }
      // },
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
        position: 'bottom'
      }

    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
