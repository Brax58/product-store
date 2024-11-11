import { Product } from './../../../shared/interfaces/product.interface';
import { ProductService } from '../../../shared/services/product.service';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../../../shared/components/form/form.component';
import { BackToListComponent } from '../../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormComponent,BackToListComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})

export class EditProductComponent {

  protected readonly productService = inject(ProductService);
  protected readonly matSnackBar = inject(MatSnackBar);
  protected readonly router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productService.put(this.product.id, product)
      .subscribe(() => {
        this.matSnackBar.open('Product Updated successfully!', 'Ok')

        this.router.navigateByUrl("/");
      });
  }

}
