package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Diseases;
import com.pharmapartners.medicomGo.repository.DiseaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseaseService {

    @Autowired
    DiseaseRepository diseaseRepository;

    public List<Diseases> getAllDiseasesByPatientID(String id){
        int patientID=Integer.parseInt(id);
        return diseaseRepository.findAllByPatientID(patientID);
    }
}
