package com.project.studentsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.project.studentsystem.repository.studentrepo;

@SpringBootApplication
@EnableMongoRepositories
public class StudentsystemApplication {

	 @Autowired
	    studentrepo studentItemRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(StudentsystemApplication.class, args);
		
		
	}

}
