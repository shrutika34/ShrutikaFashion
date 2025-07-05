import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  wishlistCount: number = 0;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.updateWishlistCount();
  }

  updateWishlistCount() {
    this.wishlistCount = this.wishlistService.getItems().length;
  }
}

