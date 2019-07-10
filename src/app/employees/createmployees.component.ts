import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
 
  templateUrl: './createmployees.component.html',
  styleUrls: ['./createmployees.component.css']
})
export class CreatemployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
