import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vaccine } from '../model/Vaccine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineServiceService {

  private vaccineUrl: string;

  constructor(private http: HttpClient) {
    this.vaccineUrl = 'http://localhost:8080/vaccine/all/id';
   }

   public findAll(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(this.vaccineUrl);
  }

  public save(vaccine: Vaccine) {
    return this.http.post<Vaccine>(this.vaccineUrl, Vaccine);
  }
}
