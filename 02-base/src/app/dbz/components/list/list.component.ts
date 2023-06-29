import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characteres.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characteresList: Character[] = [
    {
      name: 'Gohan',
      power: 5000,
    },
    {
      name: 'Tranks',
      power: 2000,
    },
  ];
}
