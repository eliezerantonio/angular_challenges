import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Open',
        icon: 'pi pi-fw pi-download',
      },
      {
        label: 'Undo',
        icon: 'pi pi-fw pi-refresh',
      },
    ];
  }
}
