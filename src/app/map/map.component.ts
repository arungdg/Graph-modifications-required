import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  continue() {
    this.route.navigate(['/', 'graph']);
  }

}
