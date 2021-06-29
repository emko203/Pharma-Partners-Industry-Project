package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.MedicinePrescription;
import com.pharmapartners.medicomGo.repository.MedicinePrescriptionRepository;
import com.pharmapartners.medicomGo.service.MedicinePrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("prescription")
public class MedicinePrescriptionController {
    @Autowired
    MedicinePrescriptionService medicinePrescriptionService;

    @CrossOrigin
    @GetMapping("/all/{id}")
    public List<MedicinePrescription> findMedicinePrescriptionsForPatientWithID(@PathVariable String id){
        return medicinePrescriptionService.findMedicinePrescriptionsForPatientWithID(id);
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public MedicinePrescription findMedicinePrescriptionWithID(@PathVariable String id){
        return medicinePrescriptionService.findMedicinePrescriptionWithID(id);
    }
}
