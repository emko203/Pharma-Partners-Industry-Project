import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientServiceService } from '../service/patient-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  patient = new Patient();

  constructor(private patientService: PatientServiceService) {}

  ngOnInit() {
    this.patientService.getAllPatients(null).pipe(first()).subscribe(data => {
      this.patients = data;
  });
  }
}
