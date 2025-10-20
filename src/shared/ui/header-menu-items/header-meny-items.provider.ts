import { InjectionToken } from '@angular/core';
import { MenuItem } from 'primeng/api';

export const HEADER_MENU_ITEMS_PROVIDER = new InjectionToken<MenuItem[]>(
  'additional header menu items',
);
