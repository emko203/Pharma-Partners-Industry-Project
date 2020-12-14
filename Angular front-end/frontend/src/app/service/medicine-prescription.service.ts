import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Medicineprescription} from '../model/medicineprescription';

@Injectable({
  providedIn: 'root'
})
export class MedicinePrescriptionService {
  private medicineUrl = 'http://localhost:8080/prescription/all/';
  private medicineUrl1 = 'http://localhost:8080/prescription/all/';
  constructor(private http:HttpClient) { }

  getAllMedicinePrescriptions(id: Number):Observable<Medicineprescription[]>{
    if(id){
      this.medicineUrl = this.medicineUrl+id;
      console.log(this.medicineUrl);
      this.medicineUrl1 = this.medicineUrl1+id;
      console.log(this.medicineUrl1);
    }
    return this.http.get<Medicineprescription[]>(`${this.medicineUrl}`);
  }
  getMedicinePrescriptionsperPatient():Observable<Medicineprescription[]>{
    return this.http.get<Medicineprescription[]>(`${this.medicineUrl1}`);
  }
}
