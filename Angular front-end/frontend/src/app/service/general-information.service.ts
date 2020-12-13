import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {

  private patientUrl: string;

  constructor(private http: HttpClient) {
    this.patientUrl = 'http://localhost:8080/patients/1';
  }

  // Get all patients
  public findAll() {
    return this.http.get(this.patientUrl);
  }


}
