package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Appointments;
import com.pharmapartners.medicomGo.repository.AppointmentsRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class AppointmentsServiceTest {

    @Autowired
    private AppointmentsService appointmentsService;

    @MockBean
    private AppointmentsRepository appointmentsRepository;

    @Test
    void testGetAllAppointments() {
        Appointments appointments = new Appointments();
        appointments.setNotesID(1);
        appointments.setPatientID(2);
        appointments.setAppointmentDate(LocalDateTime.now());

        Appointments appointments1 = new Appointments();
        appointments1.setPatientID(3);
        appointments1.setNotesID(4);
        appointments1.setAppointmentDate(LocalDateTime.now());

        List<Appointments> appointmentsList = new ArrayList<>();
        appointmentsList.add(appointments);
        appointmentsList.add(appointments1);

        Mockito.when(appointmentsRepository.findAll()).thenReturn(appointmentsList);
        assertThat(appointmentsService.getAllAppointments()).isEqualTo(appointmentsList);

    }


}
