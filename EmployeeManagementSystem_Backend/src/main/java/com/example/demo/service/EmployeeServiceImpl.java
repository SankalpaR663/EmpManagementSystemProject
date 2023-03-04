package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService
{
	@Autowired
     EmployeeRepository dao;
	@Override
	public Employee addEmployee(Employee e) 
	{
		System.out.println("employee added Succesfully "+e);
		e.setEname(e.getEname());
		e.setJob(e.getJob());
		e.setMgr(e.getMgr());
		e.setHiredate(e.getHiredate());
		e.setSal(e.getSal());
		e.setComm(e.getComm());
		e.setDept_id(e.getDept_id());
		//e.setAttendence(e.getAttendence());
		e.setImage_path(e.getImage_path());
		return dao.save(e);
	}
	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}
	@Override
	public Employee getEmployeeById(int id) {
		// TODO Auto-generated method stub
		return this.dao.findById(id).orElse(null);
	}
	@Override
	public Employee updateEmployee(Employee e) {
		Employee existingEmp=dao.findById(e.getId()).orElse(null);
		
		
			existingEmp.setEname(e.getEname());
			existingEmp.setJob(e.getJob());
			existingEmp.setMgr(e.getMgr());
			existingEmp.setHiredate(e.getHiredate());
			existingEmp.setSal(e.getSal());
			existingEmp.setComm(e.getComm());
			existingEmp.setDept_id(e.getDept_id());
			//existingEmp.setAttendence(e.getAttendence());
			existingEmp.setImage_path(e.getImage_path());
			
			return dao.save(existingEmp);
			
		

}
@Override
public String deleteEmployee(int id) {
	Employee existsID=dao.findById(id).orElse(null);
	if(existsID!=null)
	{
	dao.deleteById(id);
	return "Employee deleted!!";
	}
	else
	{
	return "Employee does not exist!!";
	}

}

}