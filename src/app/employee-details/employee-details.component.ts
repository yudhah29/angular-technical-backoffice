import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { MenuItem } from 'primeng/api';

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
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  employee: Employee | undefined;
  searchName: string = '';
  searchEmail: string = '';
  menuItems: MenuItem[] | undefined;
  previousSearchQuery: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(){

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

    const id = this.route.snapshot.paramMap.get('id');
    this.searchName = this.route.snapshot.queryParamMap.get('searchName') || '';
    this.searchEmail = this.route.snapshot.queryParamMap.get('searchEmail') || '';

    if (id) {
      this.employee = this.employeeService.getEmployeeById(id);
    }

    this.previousSearchQuery = this.route.snapshot.queryParams;
    
  }

  goBack(): void {
    this.router.navigate(['/employee-list'], { queryParams: this.previousSearchQuery });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  }
}
