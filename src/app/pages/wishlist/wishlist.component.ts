import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  wishlistItems: any[] = [];

  constructor(private wishlistService: WishlistService) {
    this.wishlistItems = this.wishlistService.getItems();
  }

  removeFromWishlist(id: number) {
    this.wishlistService.removeFromWishlist(id);
    this.wishlistItems = this.wishlistService.getItems(); // Refresh view
  }
}
