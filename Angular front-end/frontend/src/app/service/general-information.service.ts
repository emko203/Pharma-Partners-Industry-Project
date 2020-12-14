import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {

  private patientUrl = 'http://localhost:8080/patients/';

  constructor(private http: HttpClient) { }

  getAllPatients(id: Number):Observable<Patient[]>{
    if(id){
      this.patientUrl = this.patientUrl+id;
      console.log(this.patientUrl);
    }
    return this.http.get<Patient[]>(`${this.patientUrl}`);
  }
  // Get all patients
  // public findAll() {
  //   return this.http.get(this.patientUrl);
  // }


}
