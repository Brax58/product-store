import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <mat-dialog-content class="mat-typography">
      <h2 mat-dialog-title>Are you sure you want to delete this product?</h2>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-raised-button (click)="onYes()">Yes</button>
      <button mat-button (click)="onNo()">No</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ConfirmationDialogComponent {
  readonly dialogRef = inject(MatDialogRef);

  onNo() {
    this.dialogRef.close(false);
  }

  onYes() {
    this.dialogRef.close(true);
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {
  products: Product[] = [];

  readonly productService = inject(ProductService);
  readonly router = inject(Router);
  readonly matSnackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products
    });
  }

  onEdit(id: string) {
    this.router.navigateByUrl(`/edit-product/${id}`);
  }

  onDelete(id: string) {
    const removeProduct = true;

    this.dialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
      .pipe(
        filter((answer) => answer === removeProduct)
      )
      .subscribe(() => {
        this.productService.delete(id).subscribe(() => {
          this.matSnackBar.open('Product Deleted successfully!', 'Ok')

          this.ngOnInit();
        });
      }
      )
  }
}
