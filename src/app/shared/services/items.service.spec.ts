import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { COUNTRY_LIST, HttpMock } from '..';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useClass: HttpMock
        },
        HttpHandler]
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should next selectedCountryChanged when using setter of selectedCountry', () => {
    const nextSpy = spyOn(service.selectedCountryChanged, 'next');
    service.selectedCountry = COUNTRY_LIST.UAE;
    expect(nextSpy).toHaveBeenCalled();
  });

  it('should get currentCountry when using setter of selectedCountry', () => {
    service.selectedCountry = COUNTRY_LIST.UAE;
    const currentCountry = service.selectedCountry;
    expect(currentCountry.name).toEqual(COUNTRY_LIST.UAE.name);
  });

  it('should get currentCountry when using setter of selectedCountry', () => {
    service.selectedCountry = COUNTRY_LIST.UAE;
    const currentCountry = service.selectedCountry;
    expect(currentCountry.name).toEqual(COUNTRY_LIST.UAE.name);
  });

  it('should call http.get when getCountryItems invoked', inject([HttpClient], (http: HttpClient) => {
    service.selectedCountry = COUNTRY_LIST.UAE;
    const getSpy = spyOn(http, 'get').and.returnValue(of([]));
    service.getCountryItems();
    expect(getSpy).toHaveBeenCalled();
  }));

  it('should return 7 items when getCountryItems invoked', inject([HttpClient], (http: HttpClient) => {
    service.selectedCountry = COUNTRY_LIST.UAE;
    service.getCountryItems().subscribe(response => {
      expect(response.length).toBe(7);
    });
  }));
});
