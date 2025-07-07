import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  starProducts = [
    {
      name: 'Velvet Evening Gown',
      price: 9999,
      image: 'assets/images/products/evening-gown.jpg'
    },
    {
      name: 'Gold Studded Handbag',
      price: 7499,
      image: 'assets/images/products/gold-bag.jpg'
    },
    {
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
}
