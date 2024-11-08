import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { EditProductComponent } from './features/forms/edit-product/edit-product.component';

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
    path: 'edit-product',
    loadComponent: () => import('./features/forms/edit-product/edit-product.component').then(m => m.EditProductComponent)
  },
];
