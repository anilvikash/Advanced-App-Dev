package com.example.job.repo;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.job.entity.Job;

@Repository
public interface JobRepo extends JpaRepository<Job,Integer>{
    @Query(value="Select * from job where gname like ?1%",nativeQuery=true)
		public List <Job> findBynamesStarttingwith(@Param("company_name") String name);

}
