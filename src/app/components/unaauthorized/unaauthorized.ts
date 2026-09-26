import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  imports: [RouterLink],
  selector: 'app-unaauthorized',
  styleUrl: './unaauthorized.css',
  templateUrl: './unaauthorized.html',
})
export class Unaauthorized {}
