import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { EmployeeService } from '../employee.service';

interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [MessageService]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  menuItems: MenuItem[] | undefined;
  sortOrder: number = 1;
  sortField: string = 'id';
  rowsPerPageOptions: number[] = [10, 20, 50, 100];
  rows: number = 10;
  searchName: string = '';
  searchEmail: string = '';
  totalRecords: number = 100;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = this.employees;

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

  onPageChange(event: any) {
    this.rows = event.rows;
  }

  onSort(event: any) {
    this.sortOrder = event.order;
    this.sortField = event.field;
  }

  search() {
    this.filteredEmployees = this.employees.filter(emp =>
      emp.username.toLowerCase().includes(this.searchName.toLowerCase()) &&
      emp.email.toLowerCase().includes(this.searchEmail.toLowerCase())
    );
  }

  showAddEmployee() {
    this.router.navigate(['/employee-add']);
  }

  showEditNotification() {
    this.messageService.add({ severity: 'warn', summary: 'Edit', detail: 'Data has been edited' });
  }

  showDeleteNotification() {
    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data has been deleted' });
  }

  showEmployeeDetails(id: string) {
    this.router.navigate(['/employee-detail', id], {
      queryParams: { searchName: this.searchName, searchEmail: this.searchEmail }
    });
  }
  
}
