import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { COUNTRY_LIST, IDropDown, ItemsService } from '@app/shared';
import { CountryType } from '@app/shared/types';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss']
})
export class ItemHeaderComponent implements OnInit {
  @Output() change: EventEmitter<IDropDown> = new EventEmitter<IDropDown>();

  countryList: Array<IDropDown> = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.fillCountryList();
  }

  fillCountryList(): void {
    const keys: Array<CountryType> = Object.keys(COUNTRY_LIST) as Array<CountryType>;
    this.countryList = keys.map(key => ({
      name: COUNTRY_LIST[key].name,
      icon: `/assets/images/flags/${COUNTRY_LIST[key].name}.svg`,
      value: COUNTRY_LIST[key].id.toString()
    }));
  }

  openJustClean(): void {
    window.open('https://justclean.com/', '_blank');
  }

  countryChanged(selectedCountry: IDropDown): void {
    this.itemsService.selectedCountry = COUNTRY_LIST[selectedCountry.name as CountryType];
  }

}
