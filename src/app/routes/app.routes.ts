import { Routes } from '@angular/router';

import { CatalogPage } from '@pages/catalog';

import { LINK_CATALOG } from '@shared/config';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: LINK_CATALOG },
  { path: LINK_CATALOG, component: CatalogPage },
  { path: '**', component: CatalogPage },
];
