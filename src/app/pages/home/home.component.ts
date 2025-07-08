import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  starProducts = [
    {
      id: 1,
      name: 'Velvet Evening Gown',
      price: 9999,
      image: 'assets/images/products/evening-gown.jpg'
    },
    {
      id: 2,
      name: 'Gold Studded Handbag',
      price: 7499,
      image: 'assets/images/products/gold-bag.jpg'
    },
    {
      id: 3,
      name: 'Crystal Embellished Heels',
      price: 8999,
      image: 'assets/images/products/crystal-heels.jpg'
    }
  ];

  categories = [
    { title: 'Dresses', image: 'assets/images/categories/dresses.jpg' },
    { title: 'Handbags', image: 'assets/images/categories/handbags.jpg' },
    { title: 'Shoes', image: 'assets/images/categories/shoes.jpg' },
    { title: 'Accessories', image: 'assets/images/categories/accessories.jpg' }
  ];

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.toastr.success(`${product.name} added to cart`, '🛒 Added!', {
      timeOut: 2500,
      positionClass: 'toast-bottom-center',
      closeButton: true
    });
  }

  navigateToCategory(category: string): void {
    this.router.navigate(['/products'], { queryParams: { category } });
  }
}
