package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Allergies;
import com.pharmapartners.medicomGo.repository.AllergiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AllergiesService {
    @Autowired
    AllergiesRepository allergiesRepository;

    public List<Allergies> findAllergiesForPatientWithID(String id){
        int patientId = Integer.parseInt(id);
        return allergiesRepository.findAllByPatientID(patientId);
    }
}
