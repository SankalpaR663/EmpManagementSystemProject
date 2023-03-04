package com.example.demo.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "emp")
@Entity
public class Employee {
	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "ename")
	private String ename;
	@Column(name = "job")
	private String job;
	@Column(name = "mgr")
	private Integer mgr;
	@Column(name = "hiredate")
	private Date hiredate;
	@Column(name = "sal")
	private Double sal;
	@Column(name = "comm")
	private Double comm;
	@Column(name = "dept_id")
	private Integer dept_id;
	@Column(name = "image_path")
	private String image_path;
	@ManyToOne(targetEntity = Dept.class, fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "dept_id", insertable = false, updatable = false)
	private Dept dept;
	

	public Employee() {

	}

	public Employee(int id, String ename, String job, Integer mgr, Date hiredate, Double sal, Double comm,
			Integer dept_id, String image_path) {
		super();
		this.id = id;
		this.ename = ename;
		this.job = job;
		this.mgr = mgr;
		this.hiredate = hiredate;
		this.sal = sal;
		this.comm = comm;
		this.dept_id = dept_id;
		this.image_path = image_path;
	}

	public Dept getDept() {
		return dept;
	}

	public void setDept(Dept dept) {
		this.dept = dept;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public Integer getMgr() {
		return mgr;
	}

	public void setMgr(Integer mgr) {
		this.mgr = mgr;
	}

	public Date getHiredate() {
		return hiredate;
	}

	public void setHiredate(Date hiredate) {
		this.hiredate = hiredate;
	}

	public Double getSal() {
		return sal;
	}

	public void setSal(Double sal) {
		this.sal = sal;
	}

	public Double getComm() {
		return comm;
	}

	public void setComm(Double comm) {
		this.comm = comm;
	}

	public Integer getDept_id() {
		return dept_id;
	}

	public void setDept_id(Integer dept_id) {
		this.dept_id = dept_id;
	}

	public String getImage_path() {
		return image_path;
	}

	public void setImage_path(String image_path) {
		this.image_path = image_path;
	}

}
