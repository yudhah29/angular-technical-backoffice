import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private employees: Employee[] = [
  ];

  createDummyEmployee() {
    const firstNames = ['Budi', 'Ani', 'Joko', 'Siti', 'Agus', 'Lina', 'Hadi', 'Rini', 'Eko', 'Yuni'];
    const lastNames = ['Santoso', 'Wati', 'Susilo', 'Setiawan', 'Kurniawan', 'Hidayat', 'Purwanto', 'Ningsih', 'Pratama', 'Yulianto'];

    for (let i = 0; i < 100; i++) {
      const firstNameIndex = Math.floor(Math.random() * firstNames.length);
      const lastNameIndex = Math.floor(Math.random() * lastNames.length);

      const birthYear = 1980 + Math.floor(Math.random() * 20);
      const birthMonth = Math.floor(Math.random() * 12);
      const birthDay = Math.floor(Math.random() * 28) + 1;

      this.employees.push({
        username: `${firstNames[firstNameIndex].toLowerCase()}${lastNames[lastNameIndex].toLowerCase()}${i + 1}`,
        firstName: firstNames[firstNameIndex],
        lastName: lastNames[lastNameIndex],
        email: `${firstNames[firstNameIndex].toLowerCase()}${lastNames[lastNameIndex].toLowerCase()}${i + 1}@example.com`,
        birthDate: new Date(birthYear, birthMonth, birthDay),
        basicSalary: 1000 + (i + 1) * 100,
        status: (i + 1) % 2 === 0 ? 'Active' : 'Inactive',
        group: `Group ${(i + 1) % 5 + 1}`,
        description: `User ${i + 1} description`
      });
    }
  }

  getEmployees(): Employee[] {
    this.createDummyEmployee();
    return this.employees;
  }

  addEmployee(employee: Employee): void {
     this.employees.unshift(employee);
  }

  getEmployeeById(id: string): Employee | undefined {
    return this.employees.find(employee => employee.username === id);
  }
}
