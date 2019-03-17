import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerService } from '../services/container.service';
import { SelectedSlot } from './cont';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { SlotComponent } from '../slot/slot.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() SelectedSlot: any;
  bookedslots: SelectedSlot;
  data: any;
  dateValue: any;
  slots: any;
  slotDate: string;
  message: String = 'hello';
  loaded: boolean;
  private selectedSlot: SelectedSlot[];
    constructor(private router: Router, private containerService: ContainerService, private datePipe: DatePipe) { }
  ngOnInit() {
    this.loaded = false;
}
addEvent(event: MatDatepickerInputEvent<Date>) {
  console.log('console date picker call');
  this.loaded = false;
    console.log(event.value);
    this.dateValue = event.value;
    this.slotDate = this.datePipe.transform(this.dateValue, 'yyy-MM-dd');
    console.log('date value in container is@@@@@@@@@@@@', this.slotDate);
  }
  checkcontainer() {
    this.loaded = true;
  }

    //   this.containerService.containerMethod(this.bookedslots).subscribe( resp => {
    //     console.log('data fetch from response+++++++++', resp);
    //     // this.bookedslots = data;
    //     console.log(this.bookedslots);
    //  });
    // }

}
