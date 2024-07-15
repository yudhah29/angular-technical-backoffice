import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component'; 
import { AppRoutingModule } from './app.routes';
import { SharedModule } from '../shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule 
  ],
})
export class AppModule { }
