import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownComponent } from './drop-down.component';

describe('DropDownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropDownComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set first element of the list in selectedItem if there is a list', () => {
    component.list = [{ name: 'test' }];
    component.ngOnInit();
    expect(component.selectedItem.name).toEqual('test');
  });

  it('should set empty object in selectedItem if no list', () => {
    component.list = [];
    component.ngOnInit();
    expect(component.selectedItem.name).toEqual(undefined);
  });

  it('should set empty object in selectedItem if no list at all', () => {
    component.list = null;
    component.ngOnInit();
    expect(component.selectedItem.name).toEqual(undefined);
  });

  it('should emit change event emitter on init', () => {
    const emitSpyOn = spyOn(component.change, 'emit');
    component.ngOnInit();
    expect(emitSpyOn).toHaveBeenCalled();
  });

  it('should toggle the dropdown menu when toggle method invoked', () => {
    component.open = false;
    component.toggle();
    expect(component.open).toBeTruthy();
  });

  it('should emit change event emitter when selectItem method invoked', () => {
    const emitSpyOn = spyOn(component.change, 'emit');
    component.selectItem({});
    expect(emitSpyOn).toHaveBeenCalled();
  });

  it('should call toggle method when selectItem method invoked', () => {
    const toggleSpyOn = spyOn(component, 'toggle');
    component.selectItem({});
    expect(toggleSpyOn).toHaveBeenCalled();
  });
});
