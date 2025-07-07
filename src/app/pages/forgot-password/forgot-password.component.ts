import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email = '';
  message = '';

  submit() {
    if (this.email.trim()) {
      this.message = 'If this email exists, reset instructions will be sent shortly.';
    } else {
      this.message = 'Please enter your email.';
    }
  }
}
