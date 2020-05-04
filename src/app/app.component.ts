import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: PoMenuItem[] = [
    { label: 'Cadastro Campeonato', link: '/campeonato/list' },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
