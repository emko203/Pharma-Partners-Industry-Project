import { Component, OnInit } from '@angular/core';
import {GeneralInformationService} from '../service/general-information.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from '../model/patient';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  patient: Patient;
  constructor(private generalService: GeneralInformationService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.generalService.findAll().subscribe((response: Patient) => {
      this.patient = response;
  });
  }

}
