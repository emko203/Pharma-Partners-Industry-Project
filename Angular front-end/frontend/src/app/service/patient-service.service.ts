import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Patient } from '../model/Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private patientUrl = 'http://localhost:8080/patients/all/';
  private patientUrlwihtID1:string;
  private patientUrlwihtID2:string;
  private patientUrlwihtID3:string;


  constructor(private http: HttpClient) { 
    this.patientUrlwihtID1='http://localhost:8080/patients/all/';
  }

   getAllPatients(id: Number):Observable<Patient[]>{
    if(id){
      this.patientUrl = this.patientUrl+id;
      console.log(this.patientUrl);
    }
    return this.http.get<Patient[]>(`${this.patientUrl}`);
  }
  public findPatientwithId1(id: Number):Observable<Patient[]>{
    id=1;
    if(id){
      this.patientUrlwihtID1 = this.patientUrlwihtID1+id;
      console.log(this.patientUrlwihtID1);
    }
    return this.http.get<Patient[]>(`${this.patientUrlwihtID1}`);
  }
  public findPatientwithId2(id: Number):Observable<Patient[]>{
    id=2;
    if(id){
      this.patientUrlwihtID1 = this.patientUrlwihtID1+id;
      console.log(this.patientUrlwihtID1);
    }
    return this.http.get<Patient[]>(`${this.patientUrlwihtID1}`);
  }
  public findPatientwithId3(id: Number):Observable<Patient[]>{
    id=3;
    if(id){
      this.patientUrlwihtID1 = this.patientUrlwihtID1+id;
      console.log(this.patientUrlwihtID1);
    }
    return this.http.get<Patient[]>(`${this.patientUrlwihtID1}`);
  }
}
