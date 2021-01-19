import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

import { NotesService } from '../service/notes.service';
import {Notes} from '../model/notes';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

notes: Notes[];
note = new Notes();
submitted = false;
isupdated=false;
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.noteservice.getAllNotes(null).pipe(first()).subscribe(data => {
      this.notes = data;
  });
  }
  notesaveform=new FormGroup({
    note_patient_id:new FormControl('' , [Validators.required , Validators.maxLength(5) ] ),
    note_branch:new FormControl()
  });
  get NotesId(){
    return this.notesaveform.get('notesID');
  }

  get NotesContent(){
    return this.notesaveform.get('notes_Content');
  }

  get PatientId(){
    return this.notesaveform.get('patientID');
  }
  addNotesForm(){
    this.submitted=false;
    this.notesaveform.reset();
  }

  notesupdateform=new FormGroup({
    note_patient_id:new FormControl(),
    note_note_id:new FormControl(),
    note_note_content:new FormControl(),

  });

  updateStu(updstu){
    this.note=new Notes();
    this.note.notesID=this.NotesId.value;
    this.note.notesContent=this.NotesContent.value;
    this.note.patientID=this.PatientId.value;
   console.log(this.NotesContent.value);
  }
}
