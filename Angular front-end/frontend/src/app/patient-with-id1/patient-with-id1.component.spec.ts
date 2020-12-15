import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWithID1Component } from './patient-with-id1.component';

describe('PatientWithID1Component', () => {
  let component: PatientWithID1Component;
  let fixture: ComponentFixture<PatientWithID1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientWithID1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWithID1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
