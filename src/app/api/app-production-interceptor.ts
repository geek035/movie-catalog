import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { environment } from '@environments';
import { of } from 'rxjs';

import { MOCK_CINEMA_CATALOG } from '@pages/catalog/@x/__mock__';

export const appProductionInterceptor: HttpInterceptorFn = (req, next) => {
  if (environment.production && req.url.endsWith('/cinema-catalog')) {
    return of(new HttpResponse({ status: 200, body: MOCK_CINEMA_CATALOG }));
  }

  return next(req);
};
