import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { inject } from '@angular/core';
import { ProductService } from './shared/services/product.service';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./features/forms/create-product/create-product.component').then(m => m.CreateProductComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productService = inject(ProductService);

        return productService.getById(route.paramMap.get('id') as string);
      }},
    loadComponent: () =>
      import('./features/forms/edit-product/edit-product.component').then(m => m.EditProductComponent)
  },
];
