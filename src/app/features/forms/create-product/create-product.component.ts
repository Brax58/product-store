import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../shared/services/product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})

export class CreateProductComponent {
  productService = inject(ProductService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('',
      {
        nonNullable: true,
        validators: Validators.required
      })
  });

  onSubmit() {
    this.productService.post({
      title: this.form.controls.title.value
    }).subscribe(() => {
      this.matSnackBar.open('Product created successfully!', 'Ok')

      this.router.navigateByUrl("/");
    });
  }
}
