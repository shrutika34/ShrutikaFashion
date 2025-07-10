import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  name = '';
  address = '';
  paymentMethod = 'card';
  cartItems = this.cartService.getItems();
  total = this.cartService.getTotal();

  constructor(private cartService: CartService, private toastr: ToastrService) {}

  placeOrder(): void {
    if (!this.name || !this.address) return;

    this.toastr.success('Your order has been placed successfully!', 'Order Confirmed', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
      closeButton: true
    });

    this.cartService.clearCart();
    this.name = '';
    this.address = '';
    this.paymentMethod = 'card';
  }
}
