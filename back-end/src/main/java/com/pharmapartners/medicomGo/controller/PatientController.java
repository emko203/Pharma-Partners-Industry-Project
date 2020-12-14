package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Patient;
import com.pharmapartners.medicomGo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("patients")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
    @Autowired
    PatientRepository patientRepository;

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET,path="/all")
    public List<Patient> getAllPatients(){return patientRepository.findAll();}

    @CrossOrigin
    @GetMapping("/all/{id}")
    public List<Patient> findSpecificPatient(@PathVariable String id){
        List<Patient> patients = new ArrayList<>();
        int patientId = Integer.parseInt(id);
        patients.add(patientRepository.findByPatientID(patientId));
        return patients;
    }

    @CrossOrigin
    @GetMapping("search/{name}")
    public List<Patient> searchForPatient(@PathVariable String name){
        List<Patient> patients = patientRepository.findByFirstNameContainingOrLastNameContaining(name,name);
        if(patients != null || patients.isEmpty()){
            return patients;
        }
        else{
            return null;
        }

    }
}
