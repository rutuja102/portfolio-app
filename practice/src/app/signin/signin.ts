import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onsignin() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    if (this.username === 'rutu' && this.password === '1234') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  }
}

