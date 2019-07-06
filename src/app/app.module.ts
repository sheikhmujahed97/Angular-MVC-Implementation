import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreatemployeesComponent } from './employees/createmployees.component';
import { FormsModule } from '@angular/forms'
import { EmployeeService } from './employees/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreatemployeesComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
