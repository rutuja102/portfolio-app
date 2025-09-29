import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, SignupRequest } from '../auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  user: SignupRequest = { name: '', email: '', password: '', mobile_number: '' };
  message = '';
  users: any[] = []; // list of users fetched from backend

  constructor(private auth: AuthService) {}

  submit() {
    this.auth.signup(this.user).subscribe({
      next: res => {
        this.message = `✅ User ${res.name} registered successfully!`;
        this.loadUsers(); // refresh user list
      },
      error: err => {
        this.message = err.error?.detail || 'Signup failed';
      }
    });
  }

  loadUsers() {
    this.auth.getUsers().subscribe({
      next: res => this.users = res,
      error: err => console.error('Failed to fetch users', err)
    });
  }

  ngOnInit() {
    this.loadUsers();
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AuthService, SignupRequest } from '../auth';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [CommonModule, FormsModule, HttpClientModule],
//   templateUrl: './signup.html',
//   styleUrls: ['./signup.css']
// })
// export class Signup {
//   user: SignupRequest = { name: '', email: '', password: '' };
//   message: string = '';

//   constructor(private auth: AuthService) {}

//   submit() {
//     this.auth.signup(this.user).subscribe({
//       next: res => this.message = res.message,
//       error: err => this.message = err.error.detail
//     });
//   }
// }
