import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { catchError, of } from 'rxjs';

import { CinemaCatalogApiService } from '@pages/catalog/api/cinema-catalog-api.service';

import { Header, TextSearch } from '@shared/ui';

import { CinemaCard } from '../cinema-card/cinema-card';

@Component({
  selector: 'app-catalog-page',
  imports: [UpperCasePipe, AsyncPipe, Header, TextSearch, CinemaCard, ButtonModule, CardModule],
  templateUrl: './catalog-page.html',
})
export class CatalogPage {
  public readonly title = 'Каталог фильмов';
  public readonly textSearch = '';

  private readonly cinemaApi = inject(CinemaCatalogApiService);

  public readonly cinemaCatalog$ = this.cinemaApi
    .getCinemaCatalog()
    .pipe(catchError(() => of(null)));
}
