import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

import { LINK_CATALOG } from '@shared/config';
import { DarkModeSwitcher } from '@shared/ui';

import { HEADER_MENU_ITEMS_PROVIDER } from './header-meny-items.provider';

@Component({
  selector: 'app-header-menu-items',
  imports: [DarkModeSwitcher, MenuModule, ButtonModule, RippleModule],
  templateUrl: './header-menu-items.html',
})
export class HeaderMenuItems {
  private readonly additionalItems = inject(HEADER_MENU_ITEMS_PROVIDER, { optional: true });
  private readonly initionalItems: MenuItem[] = [
    {
      label: 'Каталог фильмов',
      icon: 'pi pi-home',
      routerLink: `/${LINK_CATALOG}`,
    },
  ];

  public readonly items = Array.isArray(this.additionalItems)
    ? this.initionalItems.concat(this.additionalItems)
    : this.initionalItems;
}
