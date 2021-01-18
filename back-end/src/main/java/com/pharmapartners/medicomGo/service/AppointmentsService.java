package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Appointments;
import com.pharmapartners.medicomGo.repository.AppointmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentsService {
    @Autowired
    AppointmentsRepository appointmentsRepository;

    public List<Appointments> getAllAppointments(){
        return appointmentsRepository.findAll();
    }

    public List<Appointments> getAllAppointmentsForSpecificPatient(String id){
        int patientID= Integer.parseInt(id);
        return appointmentsRepository.findAllByPatientID(patientID);
    }
}
