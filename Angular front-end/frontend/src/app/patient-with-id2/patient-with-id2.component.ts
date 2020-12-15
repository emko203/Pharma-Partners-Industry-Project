import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-with-id2',
  templateUrl: './patient-with-id2.component.html',
  styleUrls: ['./patient-with-id2.component.css']
})
export class PatientWithID2Component implements OnInit {
  patient: Patient;
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.findPatientwithId2().subscribe((response: Patient) => {
      this.patient = response;
      this.patient = response;
  });
  }


}
