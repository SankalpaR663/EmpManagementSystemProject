import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees:Employee[];
  constructor(private empService:EmployeeService,public router:Router,private activateRoute:ActivatedRoute) 
  {

   }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.getAllEmployees());
  }
getAllEmployees()
{
  this.empService.getAllEmployee().subscribe(data=>{
    console.log(data);
    this.employees=data;
  });
}
addEmp():void
{
  this.router.navigateByUrl("/empform")
}
updateEmp(id:number)
{
  this.router.navigateByUrl("/updateEmp/"+id);
}
deleteEmp(id : Number){
  console.log(id);
  if(confirm("Do you want to delete ?")){
    this.empService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getAllEmployees();
    })
  };
}
}
