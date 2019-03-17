import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  checkcontainer() {
    this.route.navigate(['/' , 'checkcontainer']);
}
checkroute() {
  this.route.navigate(['/' , 'checkroute']);
}
}
