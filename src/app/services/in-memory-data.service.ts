import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
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
    return { products };
  }
}
