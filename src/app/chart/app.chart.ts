import { Component, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js/dist/Chart.bundle.js';
import { ChartsService } from '../services/charts.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './app.chart.html',
  styleUrls: ['./app.chart.scss']
})
export class ChartComponent {
  chart = [];
  date: any;
  slot: String;
  formatDate: any;
  errorMessage = '';
  flag = false;

  constructor(private chartsService: ChartsService, private datePipe: DatePipe, private ref: ChangeDetectorRef) { }
  getChartInfo(dateValue: Date, slotType: String) {
    const lat = [];
    const long = [];
    const allNodes = [];
    const fomattedData = [];
    this.date = dateValue;
    this.slot = slotType;
    this.formatDate = this.datePipe.transform(dateValue, 'yyyy-MM-dd');
    this.chartsService.getJSON(this.formatDate, this.slot).subscribe(res => {
      if (res === null || res.length === 0) {
        this.chart = null;
        this.flag = false;
        this.ref.detectChanges();
      } else {
        this.flag = true;
      res.map((data: any) => {
        if (data['Route'].length !== 0) {
          data['Route'].map((x: any) => {
            lat.push(x.node_X);
            long.push(x.node_Y);
            allNodes.push(x.nodeId);
          });
         }
      });
      for (let index = 0; index < allNodes.length; index++) {
        fomattedData.push(
          {
            x: lat[index],
            y: long[index]
          }
          );
      }
      this.newChart(allNodes, fomattedData);
      this.ref.markForCheck();
    }
    });
  }

  newChart(allNodes: any, fomattedData: any) {
    this.chart = new Chart('canvas', {
      type: 'scatter',
      data: {
        labels: allNodes,
        datasets: [
          {
            data: fomattedData,
            borderColor: 'lightblue',
            fill: false,
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        showLines: true,
        scales: {
          xAxes: [
            {
              display: true,
              type: 'linear',
              position: 'bottom'
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }

  // this function would be used to update the graph. commenting it as it isn't required as of now
  addData(chart:any, label:any, data:any) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset:any) => {
      dataset.data.push(data);
    });
    chart.update();
  }
}
