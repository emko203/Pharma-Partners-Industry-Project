import { Component, OnInit } from '@angular/core';
import {Diseases} from '../model/diseases';
import {DiseasesService} from '../service/diseases.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrls: ['./diseases-list.component.css']
})
export class DiseasesListComponent implements OnInit {

  diseases: Diseases[];
  disease = new Diseases();

  constructor(private diseasesService: DiseasesService) { }

  ngOnInit() {
    this.diseasesService.getAllDiseases(null).pipe(first()).subscribe(data => {
      this.diseases = data;
  });
  }
}
