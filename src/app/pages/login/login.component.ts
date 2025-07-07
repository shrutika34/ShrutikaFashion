import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  login() {
    const stored = localStorage.getItem('user');
    const user = stored ? JSON.parse(stored) : null;

    if (user && user.email === this.email && user.password === this.password) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/';
    } else {
      this.error = user ? 'Invalid credentials.' : 'No user found.';
    }
  }
}
