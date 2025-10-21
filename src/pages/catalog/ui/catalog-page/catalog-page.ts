import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BehaviorSubject, catchError, map, of, switchMap } from 'rxjs';

import { CinemaCatalogApiService } from '@pages/catalog/api/cinema-catalog-api.service';

import { Header, TextSearch } from '@shared/ui';

import { CinemaCard } from '../cinema-card/cinema-card';
import { CinemaDialog } from '../cinema-dialog/cinema-dialog';

@Component({
  selector: 'app-catalog-page',
  imports: [
    UpperCasePipe,
    AsyncPipe,
    Header,
    TextSearch,
    CinemaCard,
    ButtonModule,
    CardModule,
    CinemaDialog,
  ],
  templateUrl: './catalog-page.html',
})
export class CatalogPage {
  public readonly title = 'Каталог фильмов';
  public readonly textSearch$ = new BehaviorSubject<string | null>(null);

  private readonly cinemaApi = inject(CinemaCatalogApiService);
  private readonly catalogSizeCoeff = 2;

  public readonly cinemaCatalog$ = this.textSearch$.pipe(
    switchMap(textSearch => this.cinemaApi.getCinemaCatalog(textSearch || '')),
    map(catalog => catalog.concat(...Array(this.catalogSizeCoeff).fill(catalog))),
    map(catalog => catalog.map((cinema, index) => ({ ...cinema, id: String(index + 1) }))),
    catchError(() => of(null)),
  );

  handleTextSearchUpdate(value: string | null): void {
    this.textSearch$.next(value);
  }
}
