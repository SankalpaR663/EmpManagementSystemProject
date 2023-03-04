package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;

public interface EmployeeService 
{
	public Employee addEmployee(Employee e);
	public List<Employee> getAllEmployee();
	
	public Employee getEmployeeById(int id);
	
	public Employee updateEmployee(Employee e);
	public String deleteEmployee(int id);

	
}
