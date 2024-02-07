import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  departmentId: string = '';
  dep: any = {};

  constructor(private employeeService: EmployeeService) {}



  searchEmployees() {
  this.employeeService.getdepartmentsById(this.departmentId).subscribe(
      (data) => {
        this.dep = data;
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }
  setEmpData(data:any){
    console.log(data);
    this.employeeService.setEmp(data);

  }
}
