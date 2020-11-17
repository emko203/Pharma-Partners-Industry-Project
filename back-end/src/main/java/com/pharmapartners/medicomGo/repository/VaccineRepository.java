package com.pharmapartners.medicomGo.repository;

import com.pharmapartners.medicomGo.model.Vaccine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VaccineRepository extends JpaRepository<Vaccine,Integer> {
    List<Vaccine> findAllByPatientID(int patientID);
}
