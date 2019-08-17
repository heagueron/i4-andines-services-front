import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelationPage } from './cancelation.page';

describe('CancelationPage', () => {
  let component: CancelationPage;
  let fixture: ComponentFixture<CancelationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
