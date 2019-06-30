import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  // tslint:disable-next-line:max-line-length
  cardsUsers = ['Bon Jovi', 'Alice Cooper', 'Pearl Jam', 'Bon Iver', 'Skrillex', 'Katy Perry', 'Shakira', 'Tiesto', 'Martin Garrix', 'Zedd', 'Sweedish House Mafia'];
  constructor() { }

  ngOnInit() {
  }

}
