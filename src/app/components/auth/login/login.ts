import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  imports: [ReactiveFormsModule, RouterLink], 
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  login(email: string, password: string):boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const admin = JSON.parse(localStorage.getItem('admin') || 'null');
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', user.role);
      alert('Login successful!');
      return true;
    } else if (admin && admin.email === email && admin.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', admin.role);
      alert('Admin login successful!');
      return true;
    }       
    else {
      alert('Invalid email or password');
      return false;
    }
  }
} 