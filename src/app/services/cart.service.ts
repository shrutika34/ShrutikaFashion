import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('cart');
      this.cartItems = stored ? JSON.parse(stored) : [];
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.saveCartItems();
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.saveCartItems();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private saveCartItems() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
