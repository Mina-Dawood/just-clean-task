import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IItem, API_CONFIG, ICountry } from '..';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private currentCountry!: ICountry;
  selectedCountryChanged: Subject<ICountry> = new Subject<ICountry>();

  set selectedCountry(country: ICountry) {
    this.currentCountry = country;
    this.selectedCountryChanged.next(country);
  }

  get selectedCountry(): ICountry {
    return this.currentCountry;
  }

  constructor(private http: HttpClient) { }

  getCountryItems(): Observable<Array<IItem>> {
    return this.http.get(`${API_CONFIG.GET_ITEMS.replace('{0}', this.currentCountry.id.toString())}`).pipe(
      map((response: any) => {
        const result: Array<IItem> = response;
        return result;
      })
    );
  }
}
