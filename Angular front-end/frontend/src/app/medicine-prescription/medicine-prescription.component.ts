import { Component, OnInit } from '@angular/core';
import { MedicinePrescriptionService } from '../service/medicine-prescription.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-medicine-prescription',
  templateUrl: './medicine-prescription.component.html',
  styleUrls: ['./medicine-prescription.component.css']
})
export class MedicinePrescriptionComponent implements OnInit {
 pid:number;
 patientid:number;
 medicineprescriptions:object;
  constructor(private medicineService: MedicinePrescriptionService) { }

  ngOnInit(): void {
    this.medicineService.getAllMedicinePrescriptions(this.pid).pipe(first()).subscribe(data => {
      this.medicineprescriptions = data;
  });
  this.medicineService. getMedicinePrescriptionsperPatient(this.patientid).pipe(first()).subscribe(data => {
    this.medicineprescriptions = data;
});
}
}
