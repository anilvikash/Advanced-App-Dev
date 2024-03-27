package com.example.job.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Job {   
@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int gid;
    private String company_name;
    private String job_qualification;
    private String job_position;
    private String salary;
    private String location;
}
