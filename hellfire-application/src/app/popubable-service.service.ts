import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopubableServiceService {

  constructor() { }
  visibleState: boolean;
  ToggleVisibility(): void {};
}
