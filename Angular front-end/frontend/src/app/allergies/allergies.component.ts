import { Component, OnInit } from '@angular/core';
import {Allergies} from '../Service_Class/allergies';
import {AllergiesService} from '../Service_Class/allergies.service';

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
