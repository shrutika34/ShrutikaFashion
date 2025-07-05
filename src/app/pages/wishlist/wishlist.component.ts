import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.loadWishlist();
  }

  loadWishlist() {
    this.wishlistItems = this.wishlistService.getItems();
  }

  removeFromWishlist(id: number) {
    this.wishlistService.removeFromWishlist(id);
    this.loadWishlist();
  }
}
