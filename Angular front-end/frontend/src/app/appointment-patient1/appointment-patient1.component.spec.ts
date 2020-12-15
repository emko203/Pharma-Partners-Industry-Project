import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPatient1Component } from './appointment-patient1.component';

describe('AppointmentPatient1Component', () => {
  let component: AppointmentPatient1Component;
  let fixture: ComponentFixture<AppointmentPatient1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentPatient1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentPatient1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
