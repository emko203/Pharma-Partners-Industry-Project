package com.pharmapartners.medicomGo.controller;

import com.pharmapartners.medicomGo.model.Appointments;
import com.pharmapartners.medicomGo.repository.AppointmentsRepository;
import com.pharmapartners.medicomGo.service.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.List;

@RestController
@RequestMapping("appointments")
public class AppointmentsController {

    @Autowired
    AppointmentsService appointmentsService;

    @CrossOrigin
    @GetMapping("/all")
    public List<Appointments> getAllAppointments(){
        return appointmentsService.getAllAppointments();
    }
    @CrossOrigin
    @GetMapping("/patient/{id}")
    public List<Appointments> getAllAppointmentsForSpecificPatient(@PathVariable String id){
        return appointmentsService.getAllAppointmentsForSpecificPatient(id);
    }
}
