import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LabResults } from '../model/lab-results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabResultsServiceService {

  private resultsUrl = 'http://localhost:8080/results/';

  constructor(private http: HttpClient) { }

  getAllLabResults(id: Number):Observable<LabResults[]>{
    if(id){
      this.resultsUrl = this.resultsUrl+id;
      console.log(this.resultsUrl);
    }
    return this.http.get<LabResults[]>(`${this.resultsUrl}`);
  }
}
