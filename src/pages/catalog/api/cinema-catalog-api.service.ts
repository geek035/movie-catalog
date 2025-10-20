import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments';
import { CinemaModel } from '@server/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CinemaCatalogApiService {
  private readonly httpClient = inject(HttpClient);

  getCinemaCatalog(): Observable<CinemaModel[]> {
    return this.httpClient.get<CinemaModel[]>(`${environment.api}/cinema-catalog`);
  }
}
