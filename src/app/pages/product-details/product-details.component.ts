import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productId: number;
  product: any;

  constructor(private route: ActivatedRoute) {
    this.productId = +this.route.snapshot.params['id'];
    this.product = this.getProductById(this.productId);
  }

  getProductById(id: number) {
    const products = [
      {
        id: 1,
        name: 'Luxury Dress',
        price: 2499,
        description: 'Elegant luxury wear made from premium materials.',
        image: 'assets/images/product1.jpg'
      },
      {
        id: 2,
        name: 'Classic Gown',
        price: 3499,
        description: 'Timeless design perfect for evening occasions.',
        image: 'assets/images/product2.jpg'
      }
    ];
    return products.find(p => p.id === id);
  }
}
