import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/characteres.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

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

  public onDeleteCharacter(id: string): void {
    console.log(id);

    this.onDelete.emit(id);
  }
}
