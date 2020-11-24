import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Notes } from '../models/notes';
import { NotesService } from '../service/notes.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
   
typenotes:Notes[]=[];
note : Notes=new Notes();  
submitted = false;  
isupdated=false;
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.submitted=false;
    this.noteservice.getAllNotesperPatient().pipe(first()).subscribe(data => {
      this.typenotes = data;});
  }
  notesaveform=new FormGroup({  
    note_patient_id:new FormControl('' , [Validators.required , Validators.maxLength(5) ] ),  
    note_branch:new FormControl()  
  });  

  saveNote(saveNote){  
    this.note=new Notes();    
    this.note.notesID=this.NotesId.value;  
    this.note.notesContent=this.NotesContent.value;  
    this.note.patientID=this.PatientId.value;    
    this.submitted = true;  
    this.add();  
  }  
  add() {  
    this.noteservice.addNotes(this.note.patientID,this.note)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.note = new Notes();  
  }  
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
  updateNotes(id: number){  
    this.noteservice.getNotes(id)  
      .subscribe(  
        data => {  
          this.typenotes=data             
        },  
        error => console.log(error));  
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
     
  
   this.noteservice.updateNotes(this.note.notesID,this.note).subscribe(  
    data => {       
      this.isupdated=true;  
      this.noteservice.getAllNotesperPatient().subscribe(data =>{  
        this.typenotes =data  
        })  
    },  
    error => console.log(error));  
  }  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
