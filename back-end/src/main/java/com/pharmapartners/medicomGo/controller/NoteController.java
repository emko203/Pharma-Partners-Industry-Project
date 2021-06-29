package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.MedicinePrescription;
import com.pharmapartners.medicomGo.model.Note;
import com.pharmapartners.medicomGo.repository.NoteRepository;
import com.pharmapartners.medicomGo.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
import java.util.List;

@RestController
@RequestMapping("notes")
public class NoteController {
    @Autowired
    NoteService noteService;

    @CrossOrigin
    @GetMapping("/all/{id}")
    public List<Note> findNotesForPatientWithID(@PathVariable String id){
        return noteService.findNotesForPatientWithID(id);
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public Note findNoteWithID(@PathVariable String id){
        return noteService.findNoteWithID(id);
    }

    @CrossOrigin
    @PutMapping("updateNotes/{id}")
    public Note replaceOrAddToNote(@RequestBody Note updatedNote,@PathVariable String id){
        return noteService.replaceOrAddToNote(updatedNote,id);
    }

    @CrossOrigin
    @PostMapping("/addNotes")
    public Note newNote(@RequestBody Note newNote) {
        return noteService.newNote(newNote);
    }
}
