import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JwtInterceptor } from './jwt.interceptor';
import { localStorageMock } from '..';

describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }]
  }));

  describe('intercept HTTP requests', () => {
    it('should add Content-Type and Authorization to Headers', inject([HttpClient, HttpTestingController],
      (http: HttpClient, mock: HttpTestingController) => {
        spyOn(localStorage, 'getItem')
          .and.callFake(localStorageMock.getItem);

        http.get('/api').subscribe(response => expect(response).toBeTruthy());
        const request = mock.expectOne(req => (req.headers.has('Content-Type') && req.headers.has('Authorization')));

        request.flush({ data: 'test' });
        mock.verify();
      }));
  });

  describe('intercept HTTP requests', () => {
    it('should add Content-Type to Headers', inject([HttpClient, HttpTestingController],
      (http: HttpClient, mock: HttpTestingController) => {
        spyOn(localStorage, 'getItem').and.returnValue(null);

        http.get('/api').subscribe(response => expect(response).toBeTruthy());
        const request = mock.expectOne(req => (req.headers.has('Content-Type')));

        request.flush({ data: 'test' });
        mock.verify();
      }));
  });

  afterEach(inject([HttpTestingController], (mock: HttpTestingController) => {
    mock.verify();
  }));
});