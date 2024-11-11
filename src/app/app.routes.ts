import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProducts
    },
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./features/forms/create-product/create-product.component').then(m => m.CreateProductComponent)
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: getProduct
    },
    loadComponent: () =>
      import('./features/forms/edit-product/edit-product.component').then(m => m.EditProductComponent)
  },
];
