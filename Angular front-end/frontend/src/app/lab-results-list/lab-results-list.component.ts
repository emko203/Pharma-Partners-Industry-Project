import { Component, OnInit } from '@angular/core';
import {LabResults} from '../model/lab-results';
import {LabResultsServiceService} from '../service/lab-results-service.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-lab-results-list',
  templateUrl: './lab-results-list.component.html',
  styleUrls: ['./lab-results-list.component.css']
})
export class LabResultsListComponent implements OnInit {

  labResults: LabResults[];
  labResult = new LabResults();

  constructor(private labResultsService: LabResultsServiceService) { }

  ngOnInit() {
    this.labResultsService.getAllLabResults(null).pipe(first()).subscribe(data => {
      this.labResults = data;
  });
  }

}
