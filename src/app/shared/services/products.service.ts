import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface.ts.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(payload: ProductPayload){
    return this.httpClient.post("/api/products",payload);
  }
}
