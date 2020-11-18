import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientServiceService } from '../service/patient-service.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientServiceService) {

  }

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
    });
  }
}
