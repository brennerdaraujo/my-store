import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models';

import { DialogService, ProductsService } from 'src/app/core/services';

import { ProductDetailsComponent } from '../../dialogs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  isHovered: boolean;

  constructor(
    private dialogService: DialogService,
    private productsService: ProductsService
  ) {
    this.isHovered = false;
  }

  onProductClick(product: Product) {
    const dialoogRef = this.dialogService.open(ProductDetailsComponent);
    dialoogRef.componentInstance.product = product;
  }

  getCompleteImgPath(imgPath: string): string {
    return this.productsService.completeImgPath(imgPath);
  }
}
