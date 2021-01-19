package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.LabResults;
import com.pharmapartners.medicomGo.repository.LabResultsRepository;
import com.pharmapartners.medicomGo.service.LabResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("results")
public class LabResultsController {

    @Autowired
    LabResultsService labResultsService;

    @CrossOrigin
    @GetMapping("/{id}")
    public List<LabResults> getAllLabResults(@PathVariable String id){
        return labResultsService.getAllLabResults(id);}
}
