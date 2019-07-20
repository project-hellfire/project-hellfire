import { Component, OnInit } from '@angular/core';
import { NotificationAltertService } from '../notification-altert.service';

@Component({
  selector: 'app-notification-controller',
  templateUrl: './notification-controller.component.html',
  styleUrls: ['./notification-controller.component.css']
})
export class NotificationControllerComponent implements OnInit {

  public childVisibility: boolean = false;

  constructor(private alertService: NotificationAltertService) { }

  ngOnInit() {

  }

}
