import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracPaisPage } from './carac-pais.page';

describe('CaracPaisPage', () => {
  let component: CaracPaisPage;
  let fixture: ComponentFixture<CaracPaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracPaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
