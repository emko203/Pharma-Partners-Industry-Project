import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GeneralInformationService } from '../service/general-information.service';
import { MedicinePrescriptionService } from '../service/medicine-prescription.service';
import { NotesService } from '../service/notes.service';
import { AllergiesService } from '../service/allergies.service';
import { DiseasesService } from '../service/diseases.service';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LabResultsServiceService } from '../service/lab-results-service.service';

import { Notes } from '../model/notes';
import { Medicineprescription } from '../model/medicineprescription';
import { Allergies } from '../model/allergies';
import { Patient } from '../model/patient';
import { Diseases} from '../model/diseases';
import { Vaccine} from '../model/Vaccine';
import { LabResults } from '../model/lab-results';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  vaccines: Vaccine[];
  vaccine = new Vaccine();

  diseases: Diseases[];
  disease = new Diseases();

  patients: Patient[];
  patient = new Patient();

  labResults: LabResults[];
  labResult = new LabResults();

  medicineprescriptions: Medicineprescription[];
  medicineprescription = new Medicineprescription();

  allergies: Allergies[];
  allergie = new Allergies();

  notes: Notes[];
  note: Notes = new Notes();

  private patientID: Number;


  constructor(private generalService: GeneralInformationService, private diseasesService: DiseasesService,
    private vaccineService: VaccineServiceService, private allergiesService: AllergiesService,
    private medicineService: MedicinePrescriptionService,private LabResultsService: LabResultsServiceService,
    private noteservice: NotesService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
      if(paramMap.has('id')){
        this.patientID =Number( paramMap.get('id'));
        console.log(paramMap.get('id'));
      }
    })

    this.generalService.getAllPatients(this.patientID).pipe(first()).subscribe(data => {
      this.patients = data;
      console.log(data);
    });

    this.diseasesService.getAllDiseases(this.patientID).pipe(first()).subscribe(data => {
      this.diseases = data;
      console.log(data);
    });

    this.vaccineService.getAllVaccines(this.patientID).pipe(first()).subscribe(data => {
      this.vaccines = data;
      console.log(data);
    });

    this.allergiesService.getAllAllergies(this.patientID).pipe(first()).subscribe(data => {
      this.allergies = data;
      console.log(data);
    });

    this.LabResultsService.getAllLabResults(this.patientID).pipe(first()).subscribe(data => {
      this.labResults = data;
      console.log(data);
    });

    this.medicineService.getAllMedicinePrescriptions(this.patientID).pipe(first()).subscribe(data => {
      this.medicineprescriptions = data;
      console.log(data);
  });
//     this.medicineService.getMedicinePrescriptionsperPatient().pipe(first()).subscribe(data => {
//     this.medicineprescriptions = data;
// });
this.noteservice.getAllNotes(this.patientID).pipe(first()).subscribe(data => {
  this.notes = data;
  console.log(data);
});
  }
}
