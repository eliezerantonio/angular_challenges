import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characteres.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characteres(): Character[] {
    return [...this.dbzService.characteres];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deletecharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
