import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Diseases } from '../model/diseases';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiseasesService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/diseases/all/1';
   }

   public findAll(): Observable<Diseases[]> {
    return this.http.get<Diseases[]>(this.usersUrl);
  }

  public save(disease: Diseases) {
    return this.http.post<Diseases>(this.usersUrl, disease);
  }
}
