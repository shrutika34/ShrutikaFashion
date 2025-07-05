import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  http = inject(HttpClient);

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/products.json');
  }

  getProductById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
