import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../shared/services/product.service'
import { Router } from '@angular/router';
import { FormComponent } from '../../../shared/components/form/form.component';
import { ProductPayload } from '../../../shared/interfaces/payload-product.interface.ts.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})

export class CreateProductComponent {
  protected readonly productService = inject(ProductService);
  protected readonly matSnackBar = inject(MatSnackBar);
  protected readonly router = inject(Router);

  onSubmit(product: ProductPayload) {
    this.productService.post(product).subscribe(() => {
      this.matSnackBar.open('Product created successfully!', 'Ok')

      this.router.navigateByUrl("/");
    });
  }
}
