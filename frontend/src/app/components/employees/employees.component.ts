import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ENGINE_METHOD_STORE } from 'constants';
import { Employee } from 'src/app/models/employee';
import { runInThisContext } from 'vm';
import {EmployeeService} from '../../services/employee.service';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }


  ngOnInit() {
    this.getEmployees()
  }

  employee = new Employee()

  resetForm(form?: NgForm){
    if (form){
      form.reset()
    }
  }
  saveEmployee(form: NgForm){
    if (!form.controls.id.value){
      this.employeeService.postEmployee(form.value)
      .subscribe( res => {
        this.resetForm(form)
        M.toast({html: 'Save Successfuly'})
        this.getEmployees()
       })
    } else{
      this.employeeService.putEmployee(form.value)
          .subscribe( res => {
          this.resetForm(form)
          M.toast({html: 'Edit Successfuly'})
          this.getEmployees()
       })
    }
    
  }
  getEmployee(employee: Employee){
    return this.employeeService.getEmployee(employee)
  }

  rellenarCamposFormulario(employee: Employee, form: NgForm){
    this.employeeService.getEmployee(employee)
    form.controls.id.setValue(employee.id)
    form.controls.nombre.setValue(employee.nombre)
    form.controls.apellido.setValue(employee.apellido)
    form.controls.salario.setValue(employee.salario)

  }

  deleteEmployee(employee: Employee, form: NgForm){
    this.employeeService.deleteEmployee(employee)
    .subscribe( res => {
      this.resetForm(form)
      M.toast({html: 'Delete Successfuly'})
      this.getEmployees()
    })
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[]
      })
  }
}
