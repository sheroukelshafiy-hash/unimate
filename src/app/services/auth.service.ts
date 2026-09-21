import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerAdmin(
  name: string,
  email: string,
  password: string
): void {

  const admin = {
    name: name,
    email: email,
    password: password,
    role: 'admin'
  };

  localStorage.setItem('admin', JSON.stringify(admin));

  alert('Admin account created successfully.');
}

  register(
    name: string,
    email: string,
    password: string,
    phone: string,
    studentId: string,
    university: string,
    faculty: string,
    department: string,
    level: string
   
  ): void {

    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      studentId: studentId,
      university: university,
      faculty: faculty,
      role:'user',
      
      level: level
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful! You can now log in.');
  }

  login(email: string, password: string): boolean {

    const user = JSON.parse(localStorage.getItem('user') || 'null');
  

    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', user.role);
      alert('Login successful!');
      return true;
    } else {
      alert('Invalid email or password');
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }


  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  getRole(): string {
    return localStorage.getItem('role') || '';
  }
  

}

