import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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

  login() {

    if (this.loginForm.invalid) {
      alert('Please enter valid email and password');
      return;
    }

    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;

    const success = this.authService.login(email, password);

    if (success) {
      if (this.authService.getRole() === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/home';
      }
    }
  }
}