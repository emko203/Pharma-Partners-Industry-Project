package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Vaccine;
import com.pharmapartners.medicomGo.repository.VaccineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VaccineService {

    @Autowired
    VaccineRepository vaccineRepository;

    public List<Vaccine> getAllVaccinesForPatientWithID(String id){
        int patientID=Integer.parseInt(id);
        return vaccineRepository.findAllByPatientID(patientID);
    }
}
