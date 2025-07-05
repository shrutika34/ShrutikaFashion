import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('wishlist');
      this.wishlist = saved ? JSON.parse(saved) : [];
    }
  }

  getItems(): any[] {
    return this.wishlist;
  }

  isInWishlist(id: number): boolean {
    return this.wishlist.some(item => item.id === id);
  }

  addToWishlist(product: any) {
    if (!this.isInWishlist(product.id)) {
      this.wishlist.push(product);
      this.save();
    }
  }

  removeFromWishlist(id: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== id);
    this.save();
  }

  toggleWishlist(product: any) {
    this.isInWishlist(product.id)
      ? this.removeFromWishlist(product.id)
      : this.addToWishlist(product);
  }

  private save() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }
}
