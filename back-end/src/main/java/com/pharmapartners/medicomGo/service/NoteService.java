package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Note;
import com.pharmapartners.medicomGo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class NoteService {

    @Autowired
    NoteRepository noteRepository;

    public List<Note> findNotesForPatientWithID(String id){
        int patientId = Integer.parseInt(id);
        return noteRepository.findAllByPatientID(patientId);
    }

    public Note findNoteWithID(String id){
        int noteId = Integer.parseInt(id);
        return  noteRepository.findByNotesID(noteId);
    }

    public Note replaceOrAddToNote(@RequestBody Note updatedNote, String id){
        int noteId = Integer.parseInt(id);
        return noteRepository.findById(noteId)
                .map(note -> {
                    note.setNotesContent(updatedNote.getNotesContent());
                    return noteRepository.save(note);
                }).orElseGet(()->{
                    return noteRepository.save(updatedNote);
                });
    }

    public Note newNote(@RequestBody Note newNote) {
        Note note=new Note();
        note.setNotesContent(newNote.getNotesContent());
        note.setPatientID((newNote.getPatientID()));
        return noteRepository.save(note);
    }
}
