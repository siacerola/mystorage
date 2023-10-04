import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexYAxis
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries
  chart: ApexChart
  xaxis: ApexXAxis
  stroke: ApexStroke
  legend: ApexLegend
  grid:ApexGrid
  dataLabels:ApexDataLabels
  fill:ApexFill
  colors:string[]
  yaxis:ApexYAxis
};

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent {

  title = "Overall Sales"

  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "sales",
          data: [10, 20, 15, 18, 23, 47, 31, 56, 61]
        }
      ],
      colors:['#60a5fa'],
      fill:{
        type:"gradient"
      },
      stroke:{
        curve:"smooth",
        width:5
      },
      legend:{
        show:true,
        position:'bottom',
        showForSingleSeries:true,
        horizontalAlign:'center',
        fontSize:'16px',
        itemMargin:{
          vertical:24
        }
      },
      chart: {
        width:"100%",
        height: '350',
        type: "area",
        toolbar: {
          show:false
        }
      },
      dataLabels: {
        enabled:true
      },
      grid: {
        show:true,
        borderColor:'#f1f5f9',
        xaxis:{
          lines:{
            show:true
          }
        },
        yaxis:{
          lines:{
            show:false
          }
        }
      },
      xaxis: {
        categories:[2014, 2015,  2016,  2017,  2018,  2019,  2020,  2021, 2022],
        tickAmount:5,
      },
      yaxis:{
        show:true,
        tickAmount:2,
        opposite:false
      }
    }
  }

}
