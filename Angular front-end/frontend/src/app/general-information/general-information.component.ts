import { Component, OnInit } from '@angular/core';
import {GeneralInformationService} from '../service/general-information.service';
import {Patient} from '../model/patient';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  patients:Patient[];
  patient =new Patient();
  constructor(private generalService: GeneralInformationService) { }

  ngOnInit(): void {
    this.generalService.getAllPatients(null).pipe(first()).subscribe(data => {
      this.patients = data;
  });
  //   this.generalService.findAll().subscribe((response: Patient) => {
  //     this.patient = response;
  // });
  }

}
