import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  title: ApexTitleSubtitle
};

@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})
export class ChartlineComponent {
  title = "Finish Product"
  subtitle = "finish product production annually"

  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
        name: "Products",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
        height: 350,
        type:"line"
      },
      title: {
        text:"Finish Product annually"
      },
      xaxis: {
        categories:[2014, 2015,  2016,  2017,  2018,  2019,  2020,  2021, 2022]
      }
    }
  }

}
