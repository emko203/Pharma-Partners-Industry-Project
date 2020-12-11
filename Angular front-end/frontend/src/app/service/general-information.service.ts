import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient';


@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {

  private patientUrl: string;

  constructor(private http: HttpClient) {
    this.patientUrl = 'http://localhost:8080/patients/all';
  }

  // // Get patient by id
  public get(id): Observable<any> {
    return this.http.get(`${this.patientUrl}/${id}`);
  }

  // Get all patients
  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

}
