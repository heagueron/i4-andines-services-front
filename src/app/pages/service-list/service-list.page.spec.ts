import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListPage } from './service-list.page';

describe('ServiceListPage', () => {
  let component: ServiceListPage;
  let fixture: ComponentFixture<ServiceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
