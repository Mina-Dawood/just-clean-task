import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthenticationService, AuthenticationServiceMock, RouterMock } from '@app/shared';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login when getStarted mothod invoked', inject([AuthenticationService], (authenticationService: AuthenticationService) => {
    const loginSpyOn = spyOn(authenticationService, 'login').and.returnValue(of(true));
    component.getStarted();
    expect(loginSpyOn).toHaveBeenCalled();
  }));

  it('should navigate when getStarted mothod invoked', inject([AuthenticationService, Router], (authenticationService: AuthenticationService, router: Router) => {
    spyOn(authenticationService, 'login').and.returnValue(of(true));
    const navigateSpy = spyOn(router, 'navigate');
    component.getStarted();
    expect(navigateSpy).toHaveBeenCalled();
  }));

  it('should not navigate when getStarted mothod invoked and not logged in', inject([AuthenticationService, Router], (authenticationService: AuthenticationService, router: Router) => {
    const navigateSpy = spyOn(router, 'navigate');
    spyOn(authenticationService, 'login').and.returnValue(of(false));
    component.getStarted();
    expect(navigateSpy).not.toHaveBeenCalled();
  }));
});
