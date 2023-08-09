import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: ` <h5>Buscar</h5>

    <input
      type="text"
      class="form-control"
      placeholder="Buscando gifs..."
      (keyup.enter)="searchTag()"
      #textTagInput
    />`,
})
export class SearchBoxComponent {
  @ViewChild('textTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  public searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
