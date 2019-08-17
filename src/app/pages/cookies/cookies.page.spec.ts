import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPage } from './cookies.page';

describe('CookiesPage', () => {
  let component: CookiesPage;
  let fixture: ComponentFixture<CookiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
