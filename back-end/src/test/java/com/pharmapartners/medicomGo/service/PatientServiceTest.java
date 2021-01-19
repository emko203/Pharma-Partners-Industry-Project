package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Patient;
import com.pharmapartners.medicomGo.repository.PatientRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.validation.beanvalidation.SpringValidatorAdapter;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class PatientServiceTest {

    @Autowired
    private PatientService patientService;

    @MockBean
    private PatientRepository patientRepository;

    @Test
    void testGetAllPatients() {

        Patient patient1 = new Patient();
        patient1.setFirstName("Alex");
        patient1.setLastName("Abebe");
        patient1.setAge(43);
        patient1.setAddress("A.de JongStraat");
        patient1.setContact("police");
        patient1.setEmergencyContact("Selam neice");

        Patient patient2 = new Patient();
        patient2.setFirstName("Sofie");
        patient2.setLastName("Ayele");
        patient2.setAge(44);
        patient2.setAddress("A.de JongStraat");
        patient2.setContact("Asrate");
        patient2.setEmergencyContact("Selam fiker");

        List<Patient> patientList = new ArrayList<>();
        patientList.add(patient1);
        patientList.add(patient2);

        Mockito.when(patientRepository.findAll()).thenReturn(patientList);
        assertThat(patientService.getAllPatients()).isEqualTo(patientList);

    }


}
