import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule,NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {
  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );

  protected readonly productService = inject(ProductService);
  protected readonly router = inject(Router);
  protected readonly matSnackBar = inject(MatSnackBar);
  protected readonly dialog = inject(ConfirmationDialogService);

  onEdit(id: string) {
    this.router.navigateByUrl(`/edit-product/${id}`);
  }

  onDelete(id: string) {
    const removeProduct = true;

    this.dialog
      .openDialog()
      .pipe(filter((answer) => answer === removeProduct))
      .subscribe(() => {
        this.productService.delete(id).subscribe(() => {
          this.matSnackBar.open('Product Deleted successfully!', 'Ok')

          this.productService.getAll().subscribe((products) => {
            this.products.set(products);
          });

        });
      }
      )
  }
}
