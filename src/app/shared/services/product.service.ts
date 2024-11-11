import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductPayload } from '../interfaces/payload-product.interface.ts.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(payload: ProductPayload){
    return this.httpClient.post("/api/products",payload);
  }

  put(id:string, payload: ProductPayload){
    return this.httpClient.put(`/api/products/${id}`,payload);
  }

  getById(id:string){
    return this.httpClient.get<Product>(`/api/products/${id}`);
  }

  delete(id:string){
    return this.httpClient.delete(`/api/products/${id}`);
  }
}
