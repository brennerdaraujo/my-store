import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models';

import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  constructor(
    private productsService: ProductsService
  ) {}

  getCompleteImgPath(imgPath: string): string {
    return this.productsService.completeImgPath(imgPath);
  }
}
