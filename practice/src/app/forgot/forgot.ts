import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.css']
})
export class Forgot {
  step: number = 1;   // 1 = email, 2 = otp, 3 = reset password

  email: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  otpError: boolean = false;
  passwordMismatch: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private router: Router) { }

  sendOtp(): void {
    if (this.email.trim()) {
      console.log('Email:', this.email);
      // navigate to reset component and pass email as a query param
      this.router.navigate(['/reset'], { queryParams: { email: this.email } });
    }
  }

  validateOtp(): void {
    console.log('OTP:', this.otp);
    if (this.otp === '123456') {
      this.otpError = false;
      this.step = 3;
    } else {
      this.otpError = true;
    }
  }

  resetPassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
    alert('✅ Password has been reset successfully!');

    // Reset all fields
    this.step = 1;
    this.email = '';
    this.otp = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  toggleNewPassword(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}