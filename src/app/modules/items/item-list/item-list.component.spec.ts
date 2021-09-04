import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { COUNTRY_LIST, ItemsService, ItemsServiceMock } from '@app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { throwError } from 'rxjs';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ],
      imports: [TranslateModule.forRoot()],
      providers: [
        {
          provide: ItemsService, useClass: ItemsServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load items', inject([ItemsService], (itemsService: ItemsService) => {
    const loadItemsSpy = spyOn(itemsService, 'getCountryItems').and.callThrough();
    component.loadItems();
    expect(loadItemsSpy).toHaveBeenCalled();
  }));

  it('should hide loader when load items method invoked and succeeded', inject([ItemsService], (itemsService: ItemsService) => {
    itemsService.selectedCountry = COUNTRY_LIST.UAE;
    component.loadItems();
    expect(component.isLoading).toBeFalsy();
  }));

  it('should hide loader when load items method invoked and failed', inject([ItemsService], (itemsService: ItemsService) => {
    itemsService.selectedCountry = COUNTRY_LIST.UAE;
    spyOn(itemsService, 'getCountryItems').and.returnValue(throwError({status: 404}));
    expect(component.isLoading).toBeFalsy();
  }));
});
