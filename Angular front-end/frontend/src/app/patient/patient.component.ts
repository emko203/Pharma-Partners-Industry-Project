import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


import { MedicinePrescriptionService } from '../service/medicine-prescription.service';
import { NotesService } from '../service/notes.service';
import {LabResultsListComponent} from '../lab-results-list/lab-results-list.component'
import { DiseasesListComponent } from '../diseases-list/diseases-list.component';
import {Notes} from '../model/notes';
import {Medicineprescription} from '../model/medicineprescription';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  medicineprescriptions:Medicineprescription[];
  medicineprescription=new Medicineprescription();
  notes:Notes[];
note : Notes=new Notes();
  constructor(private medicineService: MedicinePrescriptionService,private noteservice:NotesService) { }

  ngOnInit(): void {
    this.medicineService.getAllMedicinePrescriptions().pipe(first()).subscribe(data => {
      this.medicineprescriptions = data;
  });
  this.medicineService. getMedicinePrescriptionsperPatient().pipe(first()).subscribe(data => {
    this.medicineprescriptions = data;
});
this.noteservice.getAllNotesperPatient().subscribe(data=>{this.notes=data});
  }

}
