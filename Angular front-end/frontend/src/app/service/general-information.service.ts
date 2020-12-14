import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PatientInfo } from '../model/patientInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {

  private patientUrl = 'http://localhost:8080/patients/all/';

  constructor(private http: HttpClient) { }

   getAllPatients(id: Number):Observable<PatientInfo[]>{
    if(id){
      this.patientUrl = this.patientUrl+id;
      console.log(this.patientUrl);
    }
    return this.http.get<PatientInfo[]>(`${this.patientUrl}`);
  }

}
