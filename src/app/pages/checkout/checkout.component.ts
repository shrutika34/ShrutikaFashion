import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  name: string = '';
  address: string = '';
  paymentMethod: string = 'card';

  placeOrder() {
    if (this.name && this.address && this.paymentMethod) {
      alert('Order placed successfully!');
    } else {
      alert('Please complete all fields.');
    }
  }
}
