import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { COUNTRY_LIST, ItemsService, ItemsServiceMock } from '@app/shared';
import { CountryType } from '@app/shared/types';

import { ItemHeaderComponent } from './item-header.component';

describe('ItemHeaderComponent', () => {
  let component: ItemHeaderComponent;
  let fixture: ComponentFixture<ItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemHeaderComponent ],
      providers: [
        {
          provide: ItemsService, useClass: ItemsServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open just clean website', () => {
    const openSpy = spyOn(window, 'open');
    component.openJustClean();
    expect(openSpy).toHaveBeenCalledWith('https://justclean.com/', '_blank');
  });

  it('should set selectedCountry property', inject([ItemsService], (itemsService: ItemsService) => {
    component.countryChanged({name: 'UAE'});
    expect(itemsService.selectedCountry).toEqual(COUNTRY_LIST['UAE' as CountryType]);
  }));
});
