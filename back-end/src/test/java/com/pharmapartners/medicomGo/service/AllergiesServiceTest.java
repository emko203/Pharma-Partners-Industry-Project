package com.pharmapartners.medicomGo.service;

import com.pharmapartners.medicomGo.model.Allergies;
import com.pharmapartners.medicomGo.repository.AllergiesRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class AllergiesServiceTest {

    @Autowired
    private  AllergiesService allergiesService;

    @MockBean
    private AllergiesRepository allergiesRepository;

    @Test
    void testFindAllergiesForPatientWithID() {
        Allergies allergies = new Allergies();
        allergies.setAllergyDescription("dont eat pasta");
        allergies.setAllergyName("Pasta");

        Allergies allergies2 = new Allergies();
        allergies.setAllergyDescription("eat pasta");
        allergies.setAllergyName("Denche");

        List<Allergies> allergiesList = new ArrayList<>();
        allergiesList.add(allergies);
        allergiesList.add(allergies2);

        Mockito.when(allergiesRepository.findAllByPatientID(1)).thenReturn(allergiesList);
        assertThat(allergiesService.findAllergiesForPatientWithID(String.valueOf(1))).isEqualTo(allergiesList);
    }
}
