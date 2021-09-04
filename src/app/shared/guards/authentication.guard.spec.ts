import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { localStorageMock, RouterMock } from '..';

import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router, useClass: RouterMock
        }
      ]
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if token exists in local storage', inject([Router], (router: Router) => {
    spyOn(localStorage, 'getItem')
      .and.callFake(localStorageMock.getItem);
    const routerSpy = spyOn(router, 'navigate');
    guard.canActivate();
    expect(routerSpy).not.toHaveBeenCalled();
  }));

  it('should return true if token exists in local storage', inject([Router], (router: Router) => {
    spyOn(localStorage, 'getItem')
      .and.returnValue(null);
    const routerSpy = spyOn(router, 'navigate');
    guard.canActivate();
    expect(routerSpy).toHaveBeenCalled();
  }));
});
