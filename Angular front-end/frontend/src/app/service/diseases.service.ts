import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diseases } from '../model/diseases';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {

  private diseasesUrl = 'http://localhost:8080/diseases/all/';

  constructor(private http: HttpClient) { }

  getAllDiseases(id: Number):Observable<Diseases[]>{
    if(id){
      this.diseasesUrl = this.diseasesUrl+id;
      console.log(this.diseasesUrl);
    }
    return this.http.get<Diseases[]>(`${this.diseasesUrl}`);
  }
}
