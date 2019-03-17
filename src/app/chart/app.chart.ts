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
  errorMessage = null;

  constructor(private chartsService: ChartsService, private datePipe: DatePipe, private ref: ChangeDetectorRef) { }
  getChartInfo(dateValue: Date, slotType: String) {
    const lat = [];
    const long = [];
    const allNodes = [];
    const formattedData = [];
    this.date = dateValue;
    this.slot = slotType;
    this.formatDate = this.datePipe.transform(dateValue, 'yyyy-MM-dd');
    this.chartsService.getJSON(this.formatDate, this.slot).subscribe(res => {
      if (res === null || res.length === 0) {
        this.chart = null;
        this.ref.detectChanges();
      } else {
        this.errorMessage = null;
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
        formattedData.push(
          {
            x: lat[index],
            y: long[index]
          }
          );
      }
      if(formattedData.length > 1) {
        this.newChart(allNodes, formattedData[0]);
        let colors = ['red','pink','yellow','blue'];
        for (let index = 1; index < formattedData.length; index++) {
          this.addData(this.chart,colors[index],formattedData[index]); 
        }
      } else {
        this.newChart(allNodes, formattedData);
      }
      this.ref.markForCheck();
    }
    },(err) =>{
      if(err) {
        this.errorMessage = "No data found for this date or slot";
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
  addData(chart:any, color:any, data:any) {
    chart.data.datasets.forEach((dataset:any) => {
      dataset.data.push(data);
      dataset.borderColor.push(color);
    });
    chart.update();
  }
}
