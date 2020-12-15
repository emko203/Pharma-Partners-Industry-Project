import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-with-id3',
  templateUrl: './patient-with-id3.component.html',
  styleUrls: ['./patient-with-id3.component.css']
})
export class PatientWithID3Component implements OnInit {
  patient: Patient;
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.findPatientwithId3().subscribe((response: Patient) => {
      this.patient = response;
      this.patient = response;
  });
  }

}
