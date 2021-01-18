package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Diseases;
import com.pharmapartners.medicomGo.repository.DiseaseRepository;
import com.pharmapartners.medicomGo.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("diseases")
public class DiseaseController {
    @Autowired
    DiseaseService diseaseService;

    @CrossOrigin
    @GetMapping("/all/{id}")
    public List<Diseases>getAllDiseasesByPatientID(@PathVariable String id){
        return diseaseService.getAllDiseasesByPatientID(id);
    }
}
