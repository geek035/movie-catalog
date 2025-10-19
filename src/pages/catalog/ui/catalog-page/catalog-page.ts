import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { Header, TextSearch } from '@shared/ui';

@Component({
  selector: 'app-catalog-page',
  imports: [Header, TextSearch, ButtonModule, UpperCasePipe],
  templateUrl: './catalog-page.html',
})
export class CatalogPage {
  public readonly title = 'Каталог фильмов';

  public readonly textSearch = '';
}
