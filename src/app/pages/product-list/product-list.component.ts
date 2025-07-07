import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  products = [
    { id: 1, name: 'Velvet Gown', price: 9999, category: 'Dresses', image: 'assets/images/products/evening-gown.jpg' },
    { id: 2, name: 'Studded Handbag', price: 7499, category: 'Bags', image: 'assets/images/products/gold-bag.jpg' },
    { id: 3, name: 'Crystal Heels', price: 8999, category: 'Shoes', image: 'assets/images/products/crystal-heels.jpg' },
    { id: 4, name: 'Pink Designer Dress', price: 10999, category: 'Dresses', image: 'assets/images/products/pink-dress.jpg' },
    { id: 5, name: 'Luxury Sling Bag', price: 5999, category: 'Bags', image: 'assets/images/products/sling-bag.jpg' },
    { id: 6, name: 'Classic Black Heels', price: 7999, category: 'Shoes', image: 'assets/images/products/black-heels.jpg' },
    { id: 7, name: 'Emerald Green Gown', price: 11999, category: 'Dresses', image: 'assets/images/products/emerald-gown.jpg' },
    { id: 8, name: 'Royal Blue Clutch', price: 4599, category: 'Bags', image: 'assets/images/products/royal-clutch.jpg' },
    { id: 9, name: 'Pearl Embellished Flats', price: 4999, category: 'Shoes', image: 'assets/images/products/pearl-flats.jpg' },
    { id: 10, name: 'Golden Hair Clip Set', price: 1299, category: 'Accessories', image: 'assets/images/products/golden-hairclip.jpg' },
    { id: 11, name: 'Statement Necklace', price: 1899, category: 'Accessories', image: 'assets/images/products/statement-necklace.jpg' },
    { id: 12, name: 'Luxury Watch', price: 5599, category: 'Accessories', image: 'assets/images/products/luxury-watch.jpg' }
  ];

  categories = ['All', 'Dresses', 'Shoes', 'Bags', 'Accessories'];
  selectedCategory = 'All';
  searchTerm = '';
  sortOption = '';

  get filteredProducts() {
    let result = [...this.products];

    if (this.selectedCategory !== 'All') {
      result = result.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    if (this.sortOption === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }

  handleSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  handleCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedCategory = select.value;
  }

  handleSortChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.sortOption = select.value;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.toastr.success(`${product.name} added to cart`, 'Success', {
      timeOut: 2000,
      positionClass: 'toast-bottom-center'
    });
  }
}
