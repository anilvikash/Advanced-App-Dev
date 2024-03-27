package com.example.job.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.job.entity.Job;
import com.example.job.repo.JobRepo;

@Service
public class JobService {
     @Autowired
     JobRepo gr;
     
     
     public boolean AddJob(Job ge)
     {
          gr.save(ge);
          return true;
     }
     public List<Job> getJob()
     {
          return gr.findAll();
     }
     public Optional<Job> getById(int id)
     {
    	 return gr.findById(id);
     }
     public Job updateJob(Job ge)
     {
    	 return gr.saveAndFlush(ge);
     }
     
     public void deleteJob(Job ge)
     {
    	 gr.delete(ge);
     }
     public void deleteid(int id)
     {
    	 gr.deleteById(id);
     }
     public List <Job> getNameStartingwithletter(String name){
		return gr.findBynamesStarttingwith(name);
	}
     public boolean AddGift(Job ge) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'AddGift'");
     }
}
