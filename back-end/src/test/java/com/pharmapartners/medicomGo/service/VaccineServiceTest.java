package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Vaccine;
import com.pharmapartners.medicomGo.repository.VaccineRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class VaccineServiceTest {

    @Autowired
    private VaccineService vaccineService;

    @MockBean
    private VaccineRepository vaccineRepository;

    @Test
    void getAllVaccinesForPatientWithID() {

        LocalDate date1 = LocalDate.now();
        LocalDate date2 = LocalDate.now().plusMonths(1);

        Vaccine vaccine1 = new Vaccine();
        vaccine1.setPatientID(1);
        vaccine1.setVaccineID(2);
        vaccine1.setInitialDate(date1);
        vaccine1.setExpiryDate(date2);
        vaccine1.setVaccineDescription("To protect from COVID-19");

        Vaccine vaccine2 = new Vaccine();
        vaccine2.setPatientID(3);
        vaccine2.setVaccineID(4);
        vaccine2.setInitialDate(date1);
        vaccine2.setExpiryDate(date2);
        vaccine2.setVaccineDescription("To protect from HIV");

        List<Vaccine> vaccineList  = new ArrayList<>();
        vaccineList.add(vaccine1);
        vaccineList.add(vaccine2);

        Mockito.when(vaccineRepository.findAllByPatientID(1)).thenReturn((vaccineList));
        assertThat(vaccineService.getAllVaccinesForPatientWithID(String.valueOf(1))).isEqualTo(vaccineList);


    }
}
