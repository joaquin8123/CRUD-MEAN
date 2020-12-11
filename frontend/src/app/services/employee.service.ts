import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL_API = 'http://localhost:3000/employees';
  employees = []

  constructor(private http: HttpClient) {

   }
  getEmployees(){
    return this.http.get(this.URL_API);
  }

  getEmployee(employee: Employee){
    return this.http.get(`${this.URL_API}/${employee.id}`)
  }

  postEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + `/${employee.id}`, employee);
  }

  deleteEmployee(employee: Employee){
    return this.http.delete(this.URL_API + `/${employee.id}`);
  }
}
