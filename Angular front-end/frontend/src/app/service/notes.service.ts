import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private noteUrl = 'http://localhost:8080/notes/';  

  constructor(private http:HttpClient) { }

  getAllNotesperPatient(patientid:number):Observable<any>{
    return this.http.get(`${this.noteUrl}/all/${patientid}`);
  }
  getNotes(notesId:number):Observable<any>{
    return this.http.get(`${this.noteUrl}/${notesId}`);
  }
  updateNotes(notesId: number, value: any):Observable<Object> {  
    return this.http.post(`${this.noteUrl}/updateNotes/${notesId}`, value);  
  }  
    addNotes(patientid: object,notesId: object): Observable<object> {  
      return this.http.post(`${this.noteUrl}`+'addNotes', patientid,notesId);  
    }  
}
