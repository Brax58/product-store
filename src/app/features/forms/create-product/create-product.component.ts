import { ProductPayload } from './../../../shared/interfaces/payload-product.interface.ts.service';
import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../../shared/services/products.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})

export class CreateProductComponent {
  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('',
      {
        nonNullable: true,
        validators: Validators.required
      })
  });

  onSubimit() {
    this.productService.post({
      title: this.form.controls.title.value
    }).subscribe(() => {
      this.matSnackBar.open('Product created successfully!', 'Ok', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })

      this.router.navigateByUrl("/");
    });
  }
}
