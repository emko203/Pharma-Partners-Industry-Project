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
import { PatientInfo } from '../model/patientInfo';
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

  patients: PatientInfo[];
  patient = new PatientInfo();
  patientInfoDisplay:PatientInfo;

  labResults: LabResults[];
  labResult = new LabResults();

  medicineprescriptions: Medicineprescription[];
  medicineprescription = new Medicineprescription();

  allergies: Allergies[];
  allergie = new Allergies();

  notes: Notes[];
  note: Notes = new Notes();

  private patientID: number;


  constructor(private generalInformationService: GeneralInformationService, private diseasesService: DiseasesService,
    private vaccineService: VaccineServiceService, private allergiesService: AllergiesService,
    private medicineService: MedicinePrescriptionService,private LabResultsService: LabResultsServiceService,
    private noteservice: NotesService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
      if(paramMap.has('id')){
        this.patientID =Number( paramMap.get('id'));

      }
    })

    this.generalInformationService.getAllPatients(this.patientID).pipe(first()).subscribe((data:PatientInfo) => {
      this.patientInfoDisplay = data;

    });

    this.diseasesService.getAllDiseases(this.patientID).pipe(first()).subscribe(data => {
      this.diseases = data;

    });

    this.vaccineService.getAllVaccines(this.patientID).pipe(first()).subscribe(data => {
      this.vaccines = data;

    });

    this.allergiesService.getAllAllergies(this.patientID).pipe(first()).subscribe(data => {
      this.allergies = data;

    });

    this.LabResultsService.getAllLabResults(this.patientID).pipe(first()).subscribe(data => {
      this.labResults = data;

    });

    this.medicineService.getAllMedicinePrescriptions(this.patientID).pipe(first()).subscribe(data => {
      this.medicineprescriptions = data;

  });

  this.noteservice.getAllNotes(this.patientID).subscribe((list:Notes[])=>{
    this.notes=list;

  });
  }
  
  createNote(notesContentText:string) {
    if(notesContentText==null||notesContentText==""||notesContentText==" "){

    }
    else{
      this.noteservice.addNotes(notesContentText,this.patientID)
      .subscribe((data:Notes) => {
        this.notes.push({notesID:data.notesID,notesContent:notesContentText,patientID:this.patientID})
      });
      
    
    }
  }
}
