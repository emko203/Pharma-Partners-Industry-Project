import { Component, OnInit } from '@angular/core';
import {AllergiesService} from '../service/allergies.service';
import {Allergies} from '../model/allergies';


@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {
  allergies: Allergies[];
  constructor(private allergiesService: AllergiesService) {
  }

  ngOnInit() {
    this.allergiesService.findAll().subscribe(data => {
      this.allergies = data;
    });
  }

}
