import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'son goku';
  public age: number = 25;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeNameHero(): void {
    this.name = 'Saitama';
  }
  changeAgeHero(): void {
    this.age = 28;
  }
}
