import { Injectable, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private isBrowser: boolean = false;

  constructor() {
    this.isBrowser = typeof window !== 'undefined' && !!window.localStorage;

    if (this.isBrowser) {
      const stored = localStorage.getItem('cart');
      this.cartItems = stored ? JSON.parse(stored) : [];
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any): void {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateLocalStorage();
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.updateLocalStorage();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateLocalStorage();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private updateLocalStorage(): void {
    if (this.isBrowser) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
