import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWithID2Component } from './patient-with-id2.component';

describe('PatientWithID2Component', () => {
  let component: PatientWithID2Component;
  let fixture: ComponentFixture<PatientWithID2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientWithID2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWithID2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
