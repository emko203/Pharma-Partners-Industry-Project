import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWithID3Component } from './patient-with-id3.component';

describe('PatientWithID3Component', () => {
  let component: PatientWithID3Component;
  let fixture: ComponentFixture<PatientWithID3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientWithID3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWithID3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
