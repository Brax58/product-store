import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateProductComponent } from './features/forms/create-product/create-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create-product',
    loadComponent: () => import('./features/forms/create-product/create-product.component').then(m => m.CreateProductComponent)
  }
];
