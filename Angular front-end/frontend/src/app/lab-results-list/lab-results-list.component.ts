import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {LabResults} from '../model/lab-results';
import {LabResultsServiceService} from '../service/lab-results-service.service';
@Component({
  selector: 'app-lab-results-list',
  templateUrl: './lab-results-list.component.html',
  styleUrls: ['./lab-results-list.component.css']
})
export class LabResultsListComponent implements OnInit {

  labResults: LabResults[];

  constructor(private labResultsService: LabResultsServiceService) { }

  ngOnInit() {
    this.labResultsService.findAll().subscribe(data => {
      this.labResults = data;
    });
  }

}
