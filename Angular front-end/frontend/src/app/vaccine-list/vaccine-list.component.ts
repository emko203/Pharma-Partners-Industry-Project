import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../model/Vaccine';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent implements OnInit {

  vaccines: Vaccine[];
  vaccine = new Vaccine();

  constructor(private vaccineService: VaccineServiceService) {
  }

  ngOnInit() {
    this.vaccineService.getAllVaccines(null).pipe(first()).subscribe(data => {
      this.vaccines = data;
  });
  }
}
