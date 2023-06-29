import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characteres.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characteres: Character[] = [
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9500,
    },

    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 2000,
    },
    {
      id: uuid(),
      name: 'Goten',
      power: 1000,
    },
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characteres.push(newCharacter);
  }

  public deletecharacterById(id: string): void {
    this.characteres = this.characteres.filter(
      (charactere) => charactere.id !== id
    );
  }
}
