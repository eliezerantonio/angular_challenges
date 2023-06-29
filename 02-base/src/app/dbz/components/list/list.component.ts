import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/characteres.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

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

  public onDeleteCharacter(index: number): void {
    console.log(index);

    this.onDelete.emit(index);
  }
}
