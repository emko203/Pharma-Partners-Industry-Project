import { Component, OnInit } from '@angular/core';
import {AllergiesService} from '../service/allergies.service';
import {Allergies} from '../model/allergies';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {
  allergies:Allergies[];
  allergie=new Allergies();
  constructor(private allergiesService: AllergiesService) {
  }

  ngOnInit() {
    this.allergiesService.getAllAllergies(null).pipe(first()).subscribe(data => {
      this.allergies = data;
  });
  }
}
