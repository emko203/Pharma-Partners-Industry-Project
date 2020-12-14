import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from '../model/Vaccine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineServiceService {

  private vaccineUrl = 'http://localhost:8080/vaccine/all/';

  constructor(private http: HttpClient) { }

  getAllVaccines(id: Number):Observable<Vaccine[]>{
    if(id){
      this.vaccineUrl = this.vaccineUrl+id;
      console.log(this.vaccineUrl);
    }
    return this.http.get<Vaccine[]>(`${this.vaccineUrl}`);
  }
}
