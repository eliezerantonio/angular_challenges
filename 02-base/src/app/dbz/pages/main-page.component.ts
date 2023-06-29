import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characteres.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characteres: Character[] = [
    {
      name: 'Vegeta',
      power: 9500,
    },

    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Krillin',
      power: 2000,
    },
    {
      name: 'Goten',
      power: 1000,
    },
  ];
}