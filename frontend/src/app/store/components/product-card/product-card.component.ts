import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models';

import { DialogService } from 'src/app/core/services';

import { ProductDetailsComponent } from '../../dialogs/product-details/product-details.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | null = null;

  isHovered: boolean = false;

  constructor(
    private dialogService: DialogService
  ) {}

  onProductClick(product: Product) {
    const dialoogRef = this.dialogService.open(ProductDetailsComponent);
    dialoogRef.componentInstance.product = product;
  }
}
