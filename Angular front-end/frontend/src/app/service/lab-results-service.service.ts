import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LabResults } from '../model/lab-results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabResultsServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/results/all';
   }

   public findAll(): Observable<LabResults[]> {
    return this.http.get<LabResults[]>(this.usersUrl);
  }
  public save(labResult: LabResults) {
    return this.http.post<LabResults>(this.usersUrl, labResult);
  }
}
