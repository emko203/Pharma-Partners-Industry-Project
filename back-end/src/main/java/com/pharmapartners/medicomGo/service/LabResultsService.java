package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.LabResults;
import com.pharmapartners.medicomGo.repository.LabResultsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabResultsService {
    @Autowired
    LabResultsRepository labResultsRepository;


    public List<LabResults> getAllLabResults(String id){
        int patientId = Integer.parseInt(id);
        return labResultsRepository.findAllByPatientID(patientId);

    }


}
