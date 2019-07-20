import { Component, OnInit, Output, Input } from '@angular/core';
import { NotificationAltertService } from '../notification-altert.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  // make writable to by popupocontroller component
  @Input() 
  visibleState: boolean = false;

  constructor(private alertService: NotificationAltertService) { }

  ngOnInit() {
  }

}
