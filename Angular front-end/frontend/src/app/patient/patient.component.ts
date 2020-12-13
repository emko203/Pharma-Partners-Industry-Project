import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { MedicinePrescriptionService } from '../service/medicine-prescription.service';
import { NotesService } from '../service/notes.service';
import { LabResultsListComponent} from '../lab-results-list/lab-results-list.component';
import { DiseasesListComponent } from '../diseases-list/diseases-list.component';
import {Notes} from '../model/notes';
import {Medicineprescription} from '../model/medicineprescription';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  medicineprescriptions: Medicineprescription[];
  medicineprescription = new Medicineprescription();
  notes: Notes[];
  note: Notes = new Notes();
  private patientID: Number;


  constructor(private medicineService: MedicinePrescriptionService, private noteservice: NotesService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
      if(paramMap.has('id')){
        this.patientID =Number( paramMap.get('id'));
        console.log(paramMap.get('id'));
      }
    })


    this.medicineService.getAllMedicinePrescriptions(this.patientID).pipe(first()).subscribe(data => {
      this.medicineprescriptions = data;
      console.log(data);
  });
//     this.medicineService.getMedicinePrescriptionsperPatient().pipe(first()).subscribe(data => {
//     this.medicineprescriptions = data;
// });
    this.noteservice.getAllNotesperPatient().subscribe(data => {this.notes = data; });
  }

}
