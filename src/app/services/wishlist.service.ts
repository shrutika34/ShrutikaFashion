import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];
  private isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  constructor() {
    if (this.isBrowser) {
      const stored = localStorage.getItem('wishlist');
      this.wishlist = stored ? JSON.parse(stored) : [];
    }
  }

  getItems(): any[] {
    return this.wishlist;
  }

  addToWishlist(product: any): void {
    const exists = this.wishlist.find(p => p.id === product.id);
    if (!exists) {
      this.wishlist.push(product);
      this.saveWishlist();
    }
  }

  removeFromWishlist(id: number): void {
    this.wishlist = this.wishlist.filter(p => p.id !== id);
    this.saveWishlist();
  }

  private saveWishlist(): void {
    if (this.isBrowser) {
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }
}
