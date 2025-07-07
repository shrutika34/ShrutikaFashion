import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private router: Router) {}

  register() {
    if (this.name.trim() && this.email.trim() && this.password.trim()) {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(newUser));
      }

      this.message = 'Account created! Redirecting to login...';

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.message = 'Please fill all fields.';
    }
  }
}
