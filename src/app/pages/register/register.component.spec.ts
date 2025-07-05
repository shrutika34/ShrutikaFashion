import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister(): void {
    if (this.email && this.password) {
      localStorage.setItem('user_email', this.email);
      localStorage.setItem('user_password', this.password);
      this.auth.login(this.email, this.password);
      this.router.navigate(['/']);
    } else {
      this.error = 'Please fill in both email and password.';
    }
  }
}
