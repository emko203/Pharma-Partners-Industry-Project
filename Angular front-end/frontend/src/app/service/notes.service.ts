import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Notes} from '../model/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private noteUrl = 'http://localhost:8080/notes/all/1';
  private noteallUrl='http://localhost:8080/notes/1';
  private updateNotesUrl='http://localhost:8080/updateNotes/1';
  private addNotesUrl='http://localhost:8080/notes/addNotes';
  constructor(private http:HttpClient) { }

  getAllNotesperPatient():Observable<Notes[]>{
    return this.http.get<Notes[]>(`${this.noteUrl}`);
  }
  getNotes(notesId:number):Observable<Notes[]>{
    return this.http.get<Notes[]>(`${this.noteallUrl}`);
  }
  updateNotes(notesId: number, notes:object) {
    return this.http.post(`${this.updateNotesUrl}`, notes);
  }
    addNotes(notesId:number,value:any): Observable<Object> {
      return this.http.post(`${this.addNotesUrl}`, value);
    }
    public save(note: Notes) {
      return this.http.post<Notes>(this.noteUrl, note);
    }

}
