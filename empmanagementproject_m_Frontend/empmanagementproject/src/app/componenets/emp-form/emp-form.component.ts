import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  employee : Employee = new Employee(0,"","",0,new Date(),0,0,0,"");
  isEditable: boolean;
  constructor(private empService:EmployeeService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.employee);
    this.activateRoute.paramMap.subscribe(()=>this.getEmployeeById());

  }
  getEmployeeById(){
    const empID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(empID);
  if(empID> 0)
  {
    this.isEditable = true;
    this.empService.getEmployeeByID(empID).subscribe(data=>{
      this.employee = data;
      console.log(this.employee)
    });
  }

  }
  onSubmit(){
    console.log(this.employee);
    if(this.isEditable){
      this.empService.updateEmployee(this.employee).subscribe(data=>
        this.router.navigateByUrl("/employees"));

    }
    else{
    this.empService.SaveEmployee( this.employee ).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("/employees");
  }
}}
