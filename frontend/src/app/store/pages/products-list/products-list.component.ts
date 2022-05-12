import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models';

import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = [
      ...this.productsService.getProducts(),
      ...this.productsService.getProducts(),
      ...this.productsService.getProducts()
    ];
  }

}
