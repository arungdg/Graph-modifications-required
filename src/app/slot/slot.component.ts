import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ContainerService } from '../services/container.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  private data: any;
  private slots: any;
  @Input() date: String;
  actualDate: any;
  constructor(private containerService: ContainerService) {
  }

  ngOnInit() {
    this.actualDate = this.date;
    console.log('@@@@@@^^^^^^^^@@@@@@@@@', this.actualDate);
    console.log('value form parent##############$$$$$$', this.actualDate);
      this.containerService.GetSlot(this.actualDate).subscribe( resp => {
        console.log('this is the get call after container+++++++', resp);
        this.data = resp;
        this.slots = this.data;
        console.log('this is the data value#####', this.slots);
      });
    }

}
