import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
      private empURl="http://localhost:8080/api/emp";
  constructor(private httpclient:HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
    return this.httpclient.get<getEmployeeResponse>(this.empURl).pipe(map(response=>response. _embedded.employees))
  }
  SaveEmployee(employee:Employee):Observable<Employee>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpclient.post<Employee>(this.empURl,employee,httpOptions);
  }
  deleteEmployee(id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpclient.delete<Employee>(this.empURl+`/${id}`,httpOptions);
  }
  getEmployeeByID(empID:number):Observable<Employee>
{
  const empIDURl=this.empURl+"/"+empID;
  return  this.httpclient.get<Employee>(empIDURl);
}
updateEmployee(employee:Employee):Observable<Employee>{
  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  };
  return  this.httpclient.put<Employee>(this.empURl+`/${employee.id}`,employee,httpOptions);
}

}
interface getEmployeeResponse
{
  _embedded:
  {
    employees:Employee[]
  }
}
