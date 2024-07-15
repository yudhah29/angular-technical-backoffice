import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  displayError: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/employee-list']);
    } else {
      this.errorMessage = 'Invalid username or password';
      this.displayError = true;
    }
  }

  hideDialog() {
    this.displayError = false;
  }
}
