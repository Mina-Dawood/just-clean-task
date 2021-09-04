import { localStorageMock } from './../mocks/local-storage-mock';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterMock } from '..';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router, useClass: RouterMock
        }
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set token in local storage when login method invoked', () => {
    const setItemSpy = spyOn(localStorage, 'setItem')
      .and.callFake(localStorageMock.setItem);
    service.login();
    expect(setItemSpy).toHaveBeenCalled();
  });

  it('should remove token from local storage when logout method invoked', () => {
    const removeItemSpy = spyOn(localStorage, 'removeItem')
      .and.callFake(localStorageMock.removeItem);
    service.logout();
    expect(removeItemSpy).toHaveBeenCalled();
  });

  it('should remove token from local storage when logout method invoked', inject([Router], (router: Router) => {
    const navigateSpy = spyOn(router, 'navigate');
    service.logout();
    expect(navigateSpy).toHaveBeenCalled();
  }));
});
