package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.MedicinePrescription;
import com.pharmapartners.medicomGo.repository.MedicinePrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicinePrescriptionService {
    @Autowired
    MedicinePrescriptionRepository medicinePrescriptionRepository;

    public List<MedicinePrescription> findMedicinePrescriptionsForPatientWithID(String id){
        int patientId = Integer.parseInt(id);
        return medicinePrescriptionRepository.findAllByPatientID(patientId);
    }

    public MedicinePrescription findMedicinePrescriptionWithID(String id){
        int patientId = Integer.parseInt(id);
        return medicinePrescriptionRepository.findByPrescriptionID(patientId);
    }
}
