import { Component, OnInit } from '@angular/core';
import {LabResultsListComponent} from '../lab-results-list/lab-results-list.component'
import { DiseasesListComponent } from '../diseases-list/diseases-list.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
