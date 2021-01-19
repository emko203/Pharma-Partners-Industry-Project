package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.LabResults;
import com.pharmapartners.medicomGo.repository.LabResultsRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class LabResultsServiceTest {

    @Autowired
    private LabResultsService labResultsService;

    @MockBean
    private LabResultsRepository labResultsRepository;

    @Test
    void testGetAllLabResults() {

        LabResults labResults = new LabResults();
        Date date = new Date(117,05,21);
        labResults.setDateReady(date);
        labResults.setDateTaken(date);
        labResults.setLabName("Alex");
        labResults.setPatientID(2);
        labResults.setResultDescription("COVID_19");

        LabResults labResults1 = new LabResults();
        Date date1 = new Date(2020,05,21);
        Date date2 = new Date(2020,06,21);
        labResults1.setResultDescription("Kobera");
        labResults1.setPatientID(1);
        labResults1.setLabName("Biruke");
        labResults1.setDateTaken( date1);
        labResults1.setDateReady(date2);

        List<LabResults> labResultsList = new ArrayList<>();
        labResultsList.add(labResults);
        labResultsList.add(labResults1);

        Mockito.when(labResultsRepository.findAllByPatientID(1)).thenReturn(labResultsList);
        assertThat(labResultsService.getAllLabResults("1")).isEqualTo(labResultsList);


    }
}
