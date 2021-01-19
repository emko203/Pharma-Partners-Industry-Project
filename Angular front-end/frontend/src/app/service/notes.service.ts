import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from '../model/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private noteUrl = 'http://localhost:8080/notes/all/';
  private noteallUrl='http://localhost:8080/notes/';
  private updateNotesUrl='http://localhost:8080/notes/updateNotes/';
  private addNotesUrl='http://localhost:8080/notes/addNotes';
  private patientIDHolder:Number;
  constructor(private http:HttpClient) { }

  getAllNotes(id: Number):Observable<Notes[]>{
    if(id){
      this.noteUrl = this.noteUrl+id;
      console.log(this.noteUrl);
    }
    this.patientIDHolder=id;
    return this.http.get<Notes[]>(`${this.noteUrl}`);
  }
  getNotes(notesId:number):Observable<Notes[]>{
    return this.http.get<Notes[]>(`${this.noteallUrl+notesId}`);
  }

  updateNotes(notesId: number, notes:object) {
    return this.http.put(`${this.updateNotesUrl+notesId}`, notes);
  }
    addNotes(notesContent:String,patientID:Number): Observable<Object> {
      return this.http.post(`${this.addNotesUrl}`, {notesContent,patientID});
    }

}
