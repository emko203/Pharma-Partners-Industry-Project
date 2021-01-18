package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Vaccine;
import com.pharmapartners.medicomGo.repository.VaccineRepository;
import com.pharmapartners.medicomGo.service.VaccineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("vaccine")
public class VaccineController {
    @Autowired
    VaccineService vaccineService;

    @CrossOrigin
    @GetMapping("/all/{id}")
    public List<Vaccine> getAllVaccinesForPatientWithID(@PathVariable String id){
        return vaccineService.getAllVaccinesForPatientWithID(id);
    }
}
