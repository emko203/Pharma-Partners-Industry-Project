import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
patientid:object;
notesid:object;
submitted = false;  
isupdated = false;      
id:number;
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.submitted=false;
    this.isupdated=false;  
    this.noteservice.getNotes(this.id).subscribe(data =>{  
      this.notesid =data;  
      })  ;
  }
  
  add() {  
    this.noteservice.addNotes(this.patientid,this.notesid)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.patientid = new Object();  
    this.notesid = new Object(); 
  }  
  addNote(patientid,notesid){  
    this.patientid = new Object();  
    this.notesid = new Object();
    this.submitted = true;  
    this.add();  
  }  
  update(id: number){  
    this.noteservice.getNotes(id)  
      .subscribe(  
        data => {  
          this.notesid=data             
        },  
        error => console.log(error));  
  }  
  updateNotes(notesId: number){
    this.noteservice.updateNotes(notesId,this.notesid).subscribe(  
      data => {       
        this.isupdated=true;  
        this.noteservice.getNotes(notesId).subscribe(data =>{  
          this.notesid =data  
          })  
      },  
      error => console.log(error));  

  }
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
