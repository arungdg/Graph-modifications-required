import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { HomeService } from '../services/Home.service';
import { ChartComponent } from '../chart/app.chart';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  chart = [];
  slots: Food[] = [
    { value: 'A', viewValue: '9:00-12:00' },
    { value: 'B', viewValue: '13:00-16:00' },
    { value: 'C', viewValue: '16:00-22:00' }
  ];

  @ViewChild(ChartComponent) chartComponent: ChartComponent;
  @ViewChild('submitButton') submitButton: ElementRef;
  slotsAvailable: any = [];
  url: any;
  dateValue: Date;
  selectedSlot: String;
  errorMessage = '';

  constructor(private ref: ChangeDetectorRef) {}
  // ngOnInit() {
  //   // this.submitButton.nativeElement.disabled = true;
  // }

  totalPrice() {
    console.log('this is child');
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    if (event.value === null) {
      this.submitButton.nativeElement.disabled = true;
    } else {
      this.submitButton.nativeElement.disabled = false;
      console.log(event.value);
      this.dateValue = event.value;
      console.log('date value in home is', this.dateValue);
    }
  }

  onClick(value: any) {
    if (value === null) {
      this.submitButton.nativeElement.disabled = true;
    } else {
      this.submitButton.nativeElement.disabled = false;
      console.log('selected value', value);
      this.selectedSlot = value;
    }
  }

  showGraph() {
    if (this.dateValue === null || this.selectedSlot === null) {
      this.errorMessage = 'All fields are compulsory';
    } else {
      // if (this.chartComponent.flag === false) {
      //   this.errorMessage = 'Please choose both fields';
      //   this.ref.detectChanges();
      // } else {
      //   this.errorMessage = null;
        this.chartComponent.getChartInfo(this.dateValue, this.selectedSlot);
        this.ref.detectChanges();
      // }
    }
  }
}
