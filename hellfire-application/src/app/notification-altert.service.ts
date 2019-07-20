import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationAltertService {

  public showNotification: boolean = false;

  public RaisePostNotification = new Observable(subscriber => 
    { 
      this.showNotification = !this.showNotification;
      subscriber.next(!this.showNotification); 
      console.log("Raising: " + !this.showNotification);
      setTimeout(() => {
        this.showNotification = !this.showNotification;
        console.log("Raising: " + this.showNotification);
        subscriber.next(this.showNotification);
      }, 3000);
    });
  constructor() { }

  // public ShowNotification(): void 
  // {
  //   this.showNotification = true;
  // }
}
