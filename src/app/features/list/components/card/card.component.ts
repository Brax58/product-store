import { Product } from './../../../../shared/interfaces/product.interface';
import { Component, computed, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  product = input.required<Product>();

  productTitle = computed(() => this.product().title);
}
