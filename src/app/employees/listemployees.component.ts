import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({

  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})

export class ListemployeesComponent implements OnInit {

  employees: Employee[];
    constructor(private employeeservice : EmployeeService) {
  }


  ngOnInit() {
    this.employees = this.employeeservice.getEmployees();
  }

}

