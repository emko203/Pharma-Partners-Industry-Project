package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Allergies;
import com.pharmapartners.medicomGo.repository.AllergiesRepository;
import com.pharmapartners.medicomGo.service.AllergiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("allergies")
public class AllergiesController {
    @Autowired
    AllergiesService allergiesService;

    @CrossOrigin
    @GetMapping("/{id}")
    public List<Allergies> findAllergiesForPatientWithID(@PathVariable String id){

        return allergiesService.findAllergiesForPatientWithID(id);
    }
}
