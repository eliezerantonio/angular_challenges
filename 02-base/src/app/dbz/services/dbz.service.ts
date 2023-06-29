import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characteres.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
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

  public onNewCharacter(character: Character): void {
    this.characteres.push(character);
  }

  public onDelete(index: number): void {
    console.log('maim page');
    this.characteres.splice(index);
  }
}
