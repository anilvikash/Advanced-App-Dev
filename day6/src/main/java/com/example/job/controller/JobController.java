package com.example.job.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.job.entity.Job;
import com.example.job.service.JobService;

@RestController
public class JobController {
    @Autowired
	JobService gs;
	
    @PostMapping("/job/post")
	public boolean addJob(@RequestBody Job ge)
	{
        return gs.AddJob(ge);
	}
    @GetMapping("/job/get")
    public List<Job> getAllJob()
    {
        return gs.getJob();
    }
	@GetMapping("job/get/{id}")
	public Optional<Job> getbyId(@PathVariable int id)
	{
		return gs.getById(id);
	}
    @PutMapping("job/update")
	public Job updatejob(@RequestBody Job ge)
	{
		return gs.updateJob(ge);
	}
	@DeleteMapping("job/delete")
	public String deletejob(@RequestBody Job ge)
	{
		gs.deleteJob(ge);
		return "deleted Successfully";
	}
	
	@DeleteMapping("job/delete/{id}")
	public String deletejobid(@PathVariable int id)
	{
		gs.deleteid(id);
		return "id :"+id+" is deleted successfully";
	}
}
