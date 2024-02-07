import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit  {
  employee: any = {}; // Assuming you have an Employee model

  constructor(private employeeService: EmployeeService) {
   
    

  }
  ngOnInit(){
    this.employee= this.employeeService.getEmp();
  }

  editEmployee() {
    // Add logic to navigate to the edit form
  }

  deleteEmployee() {
    // Add logic to delete the employee
    // You can use a service to make an HTTP request to your backend
  }
}
