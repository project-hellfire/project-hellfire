import { Component, OnInit } from '@angular/core';
// import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // mode = new FormControl('over');
  sidenavButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() { }

  ngOnInit() {
  }

}
