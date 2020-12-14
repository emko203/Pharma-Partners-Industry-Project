package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Allergies;
import com.pharmapartners.medicomGo.model.LabResults;
import com.pharmapartners.medicomGo.repository.LabResultsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("results")
public class LabResultsController {

    @Autowired
    LabResultsRepository labResultsRepository;

    @CrossOrigin
    @GetMapping("/{id}")
    public List<LabResults> findLabResultsForPatientWithID(@PathVariable String id){
        int patientId = Integer.parseInt(id);
        return labResultsRepository.findAllByPatientID(patientId);
    }

//    @CrossOrigin
//    @RequestMapping(method = RequestMethod.GET,path="/all")
//    public List<LabResults> getAllLabResults(){return labResultsRepository.findAll();}
}
