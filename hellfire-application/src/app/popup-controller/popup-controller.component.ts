import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-controller',
  templateUrl: './popup-controller.component.html',
  styleUrls: ['./popup-controller.component.css'],
})
export class PopupControllerComponent implements OnInit {

  showChildModal: boolean = false;

  constructor() 
  { }

  ngOnInit() {
  }

  ToggleVisibility(): void
  {
    this.showChildModal = !this.showChildModal;
  }
}
