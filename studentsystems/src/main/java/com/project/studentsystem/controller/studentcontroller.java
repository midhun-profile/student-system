package com.project.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.studentsystem.model.student;
import com.project.studentsystem.repository.studentrepo;
@RestController

@CrossOrigin
public class studentcontroller {
	
	@Autowired
	private studentrepo studentrepo;
	
	@PostMapping("/create")
	public void createstudent(@RequestBody student student) {
		
		studentrepo.insert(student);
	}
	
	@PostMapping("/delete/(id)")
    public void deletestudent(@PathVariable String id) {
		studentrepo.deleteById(id);
		
	}

      @GetMapping("/list")
    public  List<student> liststudent() {
	     
    	return studentrepo.findAll();
	
       }

}
