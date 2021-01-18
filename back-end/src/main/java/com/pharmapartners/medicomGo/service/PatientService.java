package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Patient;
import com.pharmapartners.medicomGo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;

    public List<Patient> getAllPatients(){return patientRepository.findAll();}

    public Patient findSpecificPatient(String id){
        int patientId = Integer.parseInt(id);
        return patientRepository.findByPatientID(patientId);
    }

    public List<Patient> searchForPatient(String name){
        List<Patient> patients = patientRepository.findByFirstNameContainingOrLastNameContaining(name,name);
        if(patients != null || patients.isEmpty()){
            return patients;
        }
        else{
            return null;
        }

    }
}
