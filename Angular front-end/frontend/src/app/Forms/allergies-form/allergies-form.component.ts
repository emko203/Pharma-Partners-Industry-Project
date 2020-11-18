import { Component, OnInit } from '@angular/core';
import {Allergies} from "../../Service_Class/allergies";
import {ActivatedRoute, Router} from "@angular/router";
import {AllergiesService} from '../../Service_Class/allergies.service';

@Component({
  selector: 'app-allergies-form',
  templateUrl: './allergies-form.component.html',
  styleUrls: ['./allergies-form.component.css']
})
export class AllergiesFormComponent  {

  allergies: Allergies;

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private allergiesService: AllergiesService) {
    this.allergies = new Allergies();
  }

  onSubmit() {
    this.allergiesService.save(this.allergies).subscribe(result => this.gotoAllergiesList());
  }

  gotoAllergiesList() {
    this.router.navigate(['/allergies']);
  }

}
