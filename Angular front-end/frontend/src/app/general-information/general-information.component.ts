import { Component, OnInit } from '@angular/core';
import {GeneralInformationService} from '../service/general-information.service';
import { PatientInfo } from '../model/patientInfo';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  patients: PatientInfo;
  patient = new PatientInfo();

  constructor(private generalInformationService: GeneralInformationService) {}

  ngOnInit() {
    this.generalInformationService.getAllPatients(null).pipe(first()).subscribe((data:PatientInfo) => {
      this.patients = data;
  });
  }

}
