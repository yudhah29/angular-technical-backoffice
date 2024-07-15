import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  providers: [MessageService]
})
export class AddEmployeeComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  employee: any = {
     username: '',
    firstName: '',
    lastName: '',
    email: '',
    basicSalary: 0,
    status: 'Active', 
    group: '',
    description: ''};
  groupOptions: SelectItem[] = [
    { label: 'Group IT', value: 'Group IT' },
    { label: 'Group HR', value: 'Group HR' },
    { label: 'Group Supervisor', value: 'Group Supervisor' },
    { label: 'Group Team Lead', value: 'Group Team Lead' },
    { label: 'Group Project Manager', value: 'Group Project Manager' },
    { label: 'Group Developer', value: 'Group Developer' },
    { label: 'Group Android', value: 'Group Android' },
    { label: 'Group Trainer', value: 'Group Trainer' },
    { label: 'Group Business', value: 'Group Business' },
    { label: 'Group Analize', value: 'Group Analize' }
  ];
  constructor(
    private messageService: MessageService,
    private router: Router,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/employee-list'])
      },
      {
        label: 'Sign Out', icon: 'pi pi-sign-out', command: () => this.router.navigate(['/login'])
      }
    ]
  }

  saveEmployee(employeeForm: any) {
    if (employeeForm.valid) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data has been added' });

      this.employeeService.addEmployee(this.employee);

      setTimeout(() => {
        this.router.navigate(['/employee-list']);
      }, 2000); 
    } else {
      employeeForm.control.markAllAsTouched();
    }
  }
}
