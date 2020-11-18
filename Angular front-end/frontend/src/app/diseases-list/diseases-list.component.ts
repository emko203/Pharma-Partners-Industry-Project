import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Diseases} from '../model/diseases';
import {DiseasesService} from '../service/diseases.service';

@Component({
  selector: 'app-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrls: ['./diseases-list.component.css']
})
export class DiseasesListComponent implements OnInit {

  diseases: Diseases[];

  constructor(private diseasesService: DiseasesService) { }

  ngOnInit() {
    this.diseasesService.findAll().subscribe(data => {
      this.diseases = data;
    })
  }

}
