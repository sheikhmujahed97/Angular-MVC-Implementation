import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreatemployeesComponent } from './employees/createmployees.component';
import { FormsModule } from '@angular/forms'
import { EmployeeService } from './employees/employee.service';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'list', component: ListemployeesComponent },
  { path: 'create', component: CreatemployeesComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreatemployeesComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
