import { Product } from './../../../shared/interfaces/product.interface';
import { ProductService } from '../../../shared/services/product.service';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})

export class EditProductComponent {

  productService = inject(ProductService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productService.put(this.product.id, product)
      .subscribe(() => {
        this.matSnackBar.open('Product Updated successfully!', 'Ok')

        this.router.navigateByUrl("/");
      });
  }

}
