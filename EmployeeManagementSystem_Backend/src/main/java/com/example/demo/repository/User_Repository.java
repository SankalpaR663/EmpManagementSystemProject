package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.User;

@RepositoryRestResource(path="euser")
@CrossOrigin("http://localhost:4200")
public interface User_Repository extends JpaRepository<User,Integer>
{
	 User findByUsername(String uname);
	 
}