import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);
  private toastr = inject(ToastrService);
  private productService = inject(ProductService);

  products: Product[] = [];

  categories: string[] = ['All', 'Dresses', 'Shoes', 'Bags', 'Accessories'];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  sortOption: string = '';

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  get filteredProducts(): Product[] {
    let result = [...this.products];

    if (this.selectedCategory !== 'All') {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.sortOption === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }

  handleSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  handleCategoryChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCategory = select.value;
  }

  handleSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.sortOption = select.value;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.toastr.success(`${product.name} added to cart`, 'Success', {
      timeOut: 2000,
      positionClass: 'toast-bottom-center'
    });
  }

  addToWishlist(product: Product): void {
    this.wishlistService.addToWishlist(product);
    this.toastr.info(`${product.name} added to wishlist`, 'Wishlist', {
      timeOut: 2000,
      positionClass: 'toast-bottom-center'
    });
  }
}
