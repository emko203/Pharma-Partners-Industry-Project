import { Component, OnInit } from '@angular/core';
import {GeneralInformationService} from '../service/general-information.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from '../model/patient';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  patientInfo: Patient;
  patients: any;
  constructor(private generalService: GeneralInformationService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // this.getPatient(this.route.snapshot.paramMap.get('id'));
    this.generalService.findAll().subscribe(data => {
      this.patients = data;
  });
  }
  getPatient(id): void {
    this.generalService.get(id)
      .subscribe(
        data => {
          this.patientInfo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
