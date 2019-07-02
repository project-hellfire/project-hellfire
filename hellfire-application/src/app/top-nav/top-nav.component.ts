import { Component, OnInit } from '@angular/core';
import { TOPNAVDATA, TopNavData } from '../top-nav-data';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  topNavData = TOPNAVDATA;

  selectedNavData : TopNavData;

  constructor() { }

  ngOnInit() {
  }

  SelectData(data : TopNavData) : void
  {
      this.selectedNavData = data;
  }
}
