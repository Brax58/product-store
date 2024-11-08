import { Product } from './../../../shared/interfaces/product.interface';
import { ProductService } from '../../../shared/services/product.service';
import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})

export class EditProductComponent {

  productService = inject(ProductService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  form = new FormGroup({
    title: new FormControl<string>(this.product.title,
      {
        nonNullable: true,
        validators: Validators.required
      })
  });

  onSubmit(){
    let newTitle = this.form.controls.title.value;

    this.productService.put(this.product.id,{
      title: newTitle
    }).subscribe(() => {
      this.matSnackBar.open('Product Updated successfully!', 'Ok')

      this.router.navigateByUrl("/");
    });
  }

}
