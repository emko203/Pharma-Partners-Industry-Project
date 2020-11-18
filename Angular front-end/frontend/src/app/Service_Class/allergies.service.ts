import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Allergies} from './allergies';

@Injectable({
  providedIn: 'root'
})
export class AllergiesService {

  private allergiesUrl: string;

  constructor(private http: HttpClient) {
    this.allergiesUrl = 'http://localhost:8080/allergies';
  }

  public findAll(): Observable<Allergies[]> {
    return this.http.get<Allergies[]>(this.allergiesUrl);
  }

  public save(allergies: Allergies) {
    return this.http.post<Allergies>(this.allergiesUrl, allergies);
  }
}
