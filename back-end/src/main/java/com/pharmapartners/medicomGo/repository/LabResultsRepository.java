package com.pharmapartners.medicomGo.repository;

import com.pharmapartners.medicomGo.model.Allergies;
import com.pharmapartners.medicomGo.model.LabResults;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabResultsRepository extends JpaRepository<LabResults,Integer> {
    List<LabResults> findAllByPatientID(int patientID);

}
