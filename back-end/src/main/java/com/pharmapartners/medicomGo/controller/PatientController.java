package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Patient;
import com.pharmapartners.medicomGo.repository.PatientRepository;
import com.pharmapartners.medicomGo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("patients")
public class PatientController {
    @Autowired
    PatientService patientService;

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET,path="/all")
    public List<Patient> getAllPatients(){return patientService.getAllPatients();}

    @CrossOrigin
    @GetMapping("/{id}")
    public Patient findSpecificPatient(@PathVariable String id){
        return patientService.findSpecificPatient(id);
    }

    @CrossOrigin
    @GetMapping("search/{name}")
    public List<Patient> searchForPatient(@PathVariable String name){
        return patientService.searchForPatient(name);
    }
}
