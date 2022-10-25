package com.project.studentsystem.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.studentsystem.model.student;

@Repository
public interface studentrepo extends MongoRepository<student, String> {

	
	
}
