import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-forgot-password',
  styleUrl: './forgot-password.css',
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {
  forgotPasswordForm = {
    email: ''
  };

  resetPassword() {
    if (this.forgotPasswordForm.email == '') {
      alert('Please enter your email address');
      return;
    } else if (!this.forgotPasswordForm.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    
    alert('If this email is registered, you will receive a password reset link.');
  }
}

