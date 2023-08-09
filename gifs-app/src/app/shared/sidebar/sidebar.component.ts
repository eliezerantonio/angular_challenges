import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'shared-app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  async searchTag(tag: string): Promise<void> {
    await this.gifsService.searchTag(tag);
  }
}
