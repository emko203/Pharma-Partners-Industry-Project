import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Allergies} from '../model/allergies';


@Injectable({
  providedIn: 'root'
})
export class AllergiesService {
  private allergiesUrl = 'http://localhost:8080/allergies/';


  constructor(private http: HttpClient) { }

  getAllAllergies(id: Number):Observable<Allergies[]>{
    if(id){
      this.allergiesUrl = this.allergiesUrl+id;
      console.log(this.allergiesUrl);
    }
    return this.http.get<Allergies[]>(`${this.allergiesUrl}`);
  }
}
