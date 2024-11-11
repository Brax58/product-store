import { Product } from './../../../../shared/interfaces/product.interface';
import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  product = input.required<Product>();

  productTitle = computed(() => this.product().title);

  @Output() editProduct = new EventEmitter();
  @Output() deleteProduct = new EventEmitter();

  onEdit(){
    this.editProduct.emit();
  };

  onDelete(){
    this.deleteProduct.emit();
  };
}
