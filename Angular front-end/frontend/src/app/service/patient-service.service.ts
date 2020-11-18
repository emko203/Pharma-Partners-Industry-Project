import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/Patient';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private patientUrl: string;

  constructor(private http: HttpClient) {
    this.patientUrl = 'http://localhost:8080/patient';
   }

   public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientUrl, patient);
  }
}