import { HttpInterceptorFn } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { appProductionInterceptor } from './app-production-interceptor';

describe('appProductionInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => appProductionInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
