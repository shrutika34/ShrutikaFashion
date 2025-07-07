import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() {
    if (this.isBrowser()) {
      const stored = localStorage.getItem('wishlist');
      this.wishlist = stored ? JSON.parse(stored) : [];
    }
  }

  getItems(): any[] {
    return this.wishlist;
  }

  addToWishlist(product: any) {
    const exists = this.wishlist.find(p => p.id === product.id);
    if (!exists) {
      this.wishlist.push(product);
      this.saveWishlist();
    }
  }

  removeFromWishlist(id: number) {
    this.wishlist = this.wishlist.filter(p => p.id !== id);
    this.saveWishlist();
  }

  private saveWishlist() {
    if (this.isBrowser()) {
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
