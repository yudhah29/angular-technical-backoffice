import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin' }
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
