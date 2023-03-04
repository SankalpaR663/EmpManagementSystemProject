package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "dept")

public class Dept 
{
	@Column(name = "id")
	@Id
	private int id;
	@Column(name = "dname")
	private String dname;
	@Column(name = "loc")
	private String loc;
	@OneToMany(mappedBy = "dept")
	private Set<Employee> employees;

	public Dept() {

	}

	public Dept(int id, String dname, String loc) {
		super();
		this.id = id;
		this.dname = dname;
		this.loc = loc;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public String getLoc() {
		return loc;
	}

	public void setLoc(String loc) {
		this.loc = loc;
	}

}
