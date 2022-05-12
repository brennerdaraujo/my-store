import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from 'src/app/core/models/product';

import { DialogService, ProductsService } from 'src/app/core/services';

import { ConfirmComponent } from 'src/app/shared/dialogs/confirm/confirm.component';
import { ProductRegistrationComponent } from '../../dialogs/product-registration/product-registration.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'normal-price',
    'promotional-price',
    'stock',
    'status',
    'actions'
  ];
  productsData: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);

  constructor(
    private dialogService: DialogService,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    const products = this.productsService.getProducts();
    this.productsData = new MatTableDataSource<Product>(products);
  }

  private addOrEditProduct(product: Product | null = null) {
    const dialogRef = this.dialogService.open(ProductRegistrationComponent);
    dialogRef.componentInstance.product = product;
  }

  onSearchProduct(filter: string) {
    console.log('search', filter);
  }

  onAddProduct() {
    this.addOrEditProduct();
  }

  onEditProduct(product: Product) {
    this.addOrEditProduct(product);
  }

  onDelProduct(product: Product) {
    const dialogRef = this.dialogService.open(ConfirmComponent);
    dialogRef.componentInstance.title = 'Remover produto';
    dialogRef.componentInstance.content = `Deseja realmente remover <strong>${product.name}</strong>?`;

    this.dialogService.afterClosed()
      .subscribe({
        next: (confirm) => {
          if (confirm) console.log('delete', product);
        }
      });
  }
}
