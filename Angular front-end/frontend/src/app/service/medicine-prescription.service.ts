import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class MedicinePrescriptionService {
  private medicineUrl = 'http://localhost:8080/prescription/';  
  constructor(private http:HttpClient) { }
  getAllMedicinePrescriptions(prescriptionid:number):Observable<any>{
    return this.http.get(`${this.medicineUrl}/${prescriptionid}`);
  }
  getMedicinePrescriptionsperPatient(patientid:number):Observable<any>{
    return this.http.get(`${this.medicineUrl}/all/${patientid}`);
  }
}
