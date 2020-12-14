import { Component, OnInit } from '@angular/core';
import { MedicinePrescriptionService } from '../service/medicine-prescription.service';
import {Medicineprescription} from '../model/medicineprescription';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-medicine-prescription',
  templateUrl: './medicine-prescription.component.html',
  styleUrls: ['./medicine-prescription.component.css']
})
export class MedicinePrescriptionComponent implements OnInit {
  medicineprescriptions:Medicineprescription[];
  medicineprescription=new Medicineprescription();
  constructor(private medicineService: MedicinePrescriptionService) { }

  ngOnInit(): void {
    this.medicineService.getAllMedicinePrescriptions(null).pipe(first()).subscribe(data => {
      this.medicineprescriptions = data;
  });
  this.medicineService. getMedicinePrescriptionsperPatient().pipe(first()).subscribe(data => {
    this.medicineprescriptions = data;
});
}
}
