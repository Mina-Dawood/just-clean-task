import { Observable, of, Subject } from "rxjs";
import { ICountry, IItem } from "..";

export  const ITEMS_MOCK: Array<IItem> = [
    {
        "id": 1,
        "name": "Shirt",
        "price": 1,
        "country_id": 1,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    },
    {
        "id": 2,
        "name": "Pant",
        "price": 2.2,
        "country_id": 2,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    },
    {
        "id": 3,
        "name": "Track Suit",
        "price": 3.2,
        "country_id": 3,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    },
    {
        "id": 4,
        "name": "Jacket",
        "price": 4.2,
        "country_id": 2,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    },
    {
        "id": 5,
        "name": "T-shirt",
        "price": 0.2,
        "country_id": 2,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    },
    {
        "id": 6,
        "name": "Coat",
        "price": 5.2,
        "country_id": 2,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    },
    {
        "id": 7,
        "name": "Pant",
        "price": 2.2,
        "country_id": 2,
        "icon": "https://raw.githubusercontent.com/sagar-justclean/mock-server/8331ac630984f0553e584bec41c459bf0e98e916/img/icon.png"
    }
]

export class ItemsServiceMock {
    private currentCountry!: ICountry;
    selectedCountryChanged: Subject<ICountry> = new Subject<ICountry>();

    set selectedCountry(country: ICountry) {
        this.currentCountry = country;
        this.selectedCountryChanged.next(country);
    }

    get selectedCountry(): ICountry {
        return this.currentCountry;
    }

    getCountryItems(): Observable<Array<IItem>> {
        return of(ITEMS_MOCK);
    }
}