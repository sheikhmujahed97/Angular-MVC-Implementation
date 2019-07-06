import { Injectable } from '@angular/core'
import { Employee } from '../models/employee.model'

@Injectable()

export class EmployeeService {
  private listEmployee: Employee[] =
    [
      {
        id: 1,
        name: "sheikh muhahed",
        gender: "male",
        isActive: true
      },
      {
        id: 2,
        name: "khaled jeelani",
        gender: "male",
        isActive: true
      }

    ];

  getEmployees(): Employee[] {
    return this.listEmployee;
  }

}
