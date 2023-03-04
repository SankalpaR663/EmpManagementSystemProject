package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/employee")
public class EmployeeController 
{
	@Autowired
	EmployeeService service;
	@PostMapping("/addemployee")
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee e) {

		return new ResponseEntity<Employee>(service.addEmployee(e), HttpStatus.CREATED);
	}
	@GetMapping("/list")
	public List<Employee> getAllEmployee() {
		return service.getAllEmployee();
	}

	@GetMapping("find/{employeeid}")
	public ResponseEntity<Employee> getProductById(@PathVariable("employeeid") int employeeid) {
		return new ResponseEntity<Employee>(service.getEmployeeById(employeeid), HttpStatus.OK);
	}
	@PutMapping("update")
	public ResponseEntity<Employee> updateEmployee(@Valid  @RequestBody Employee e) {
		return new ResponseEntity<Employee>(service.updateEmployee(e),HttpStatus.OK);
	}

	@DeleteMapping("delete/{employeeid}")
	public ResponseEntity<Boolean> deleteEmployee(@PathVariable("employeeid") int employeeid) {
		service.deleteEmployee(employeeid);
		boolean flag = true;
		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
	}
}