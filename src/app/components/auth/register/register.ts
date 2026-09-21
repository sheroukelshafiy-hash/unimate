import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private authService: AuthService) {}

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    studentId: new FormControl('', Validators.required),
    university: new FormControl('', Validators.required),
    faculty: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  register() {

    if (this.registerForm.invalid) {
      alert('Please fill in all fields correctly');
      return;
    }

    const {
      name,
      email,
      phone,
      studentId,
      university,
      faculty,
      level,
      password,
      confirmPassword
    } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(
      name!,
      email!,
      password!,
      phone!,
      studentId!,
      university!,
      faculty!,
      '',
      level!
    );
  }

}
