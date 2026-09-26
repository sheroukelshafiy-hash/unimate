import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../navbar/navbar';

@Component({
  imports: [ReactiveFormsModule, RouterLink,Navbar],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  user:any ;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  logout() {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}

