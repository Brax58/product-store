import { ProductService } from './product.service';
import { ChangeDetectionStrategy, Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';

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
  protected readonly dialogRef = inject(MatDialogRef);

  onNo() {
    this.dialogRef.close(false);
  }

  onYes() {
    this.dialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root'
})

export class ConfirmationDialogService {

  protected readonly dialog = inject(MatDialog);
  protected readonly productService = inject(ProductService);
  protected readonly matSnackBar = inject(MatSnackBar);

  constructor() { }

  openDialog(): Observable<boolean> {
    return this.dialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
  }
}
