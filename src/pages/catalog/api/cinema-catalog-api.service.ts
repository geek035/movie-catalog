import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments';
import { CinemaModel } from '@server/models';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CinemaCatalogApiService {
  private readonly httpClient = inject(HttpClient);

  getCinemaCatalog(textSearch: string): Observable<CinemaModel[]> {
    return this.httpClient.get<CinemaModel[]>(`${environment.api}/cinema-catalog`).pipe(
      map(catalog =>
        textSearch
          ? catalog.filter(cinema => {
              const title = cinema.title.toLowerCase();
              const text = textSearch.toLowerCase();

              return title.includes(text);
            })
          : catalog,
      ),
    );
  }
}
