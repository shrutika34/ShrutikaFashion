import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // Load product data here (from JSON or API)
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  toggleWishlist(product: any) {
    this.wishlistService.toggleWishlist(product);
  }

  isInWishlist(id: number): boolean {
    return this.wishlistService.isInWishlist(id);
  }
}
