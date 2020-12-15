import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Patient } from '../model/Patient';
import { PatientServiceService } from '../service/patient-service.service';



@Component({
  selector: 'app-patient-with-id1',
  templateUrl: './patient-with-id1.component.html',
  styleUrls: ['./patient-with-id1.component.css']
})
export class PatientWithID1Component implements OnInit {
  patients: Patient[];
private patientID:number;
  constructor(private patientService:PatientServiceService) { }

  ngOnInit(): void {
    
    this.patientService.findPatientwithId1(this.patientID).pipe(first()).subscribe(data => {
      this.patients = data;
      console.log(data);
    });
  }


}
