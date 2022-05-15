import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { pagination } from 'src/app/core/consts';

import { Product } from 'src/app/core/models';

import { DialogService, ProductsService, SnackBarService } from 'src/app/core/services';

import { ConfirmComponent } from 'src/app/shared/dialogs';
import { ProductRegistrationComponent } from '../../dialogs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  displayedColumns: string[];
  logoutButton: {
    label: string;
    icon?: string;
    onClick: Function;
  };
  isLoading: boolean;
  pag: {
    pageSize: number;
    filter: string;
    length: number;
  };
  productsData!: MatTableDataSource<Product>;

  private productsSub: Subscription;

  constructor(
    private dialogService: DialogService,
    private productsService: ProductsService,
    private router: Router,
    private snackBarService: SnackBarService,
  ) {
    this.displayedColumns = [
      'name',
      'normal-price',
      'promotional-price',
      'stock',
      'status',
      'actions'
    ];
    this.logoutButton = {
      label: 'Sair',
      icon: 'exit_to_app',
      onClick: () => this.router.navigate([''])
    };
    this.isLoading = false;
    this.pag = {
      filter: '',
      length: 0,
      pageSize: pagination.limit,
    };
    this.productsSub = new Subscription();
  }

  ngOnInit(): void {
    this.getProducts();

    this.productsSub = this.productsService.getUpdateListener()
      .subscribe({
        next: (value) => {
          this.productsData = new MatTableDataSource<Product>(value.products);
          this.pag.length = value.total;
          this.isLoading = false;
        },
        error: this.handleError
      });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }

  private handleError = (error: any) => {
    this.isLoading = false;
    this.snackBarService.open(
      error.error.message || error.message,
      'Fechar',
      true
    );
    console.error(error);
  }

  private addOrEditProduct(product?: Product) {
    const dialogRef = this.dialogService.open(ProductRegistrationComponent);
    dialogRef.componentInstance.product = product;

    this.dialogService.afterClosed()
      .subscribe({
        next: (value) => {
          if (value)
            this.getProducts();
        }
      });
  }

  getProducts(pageEvent?: PageEvent) {
    const page: number = pageEvent ? pageEvent.pageIndex : 0;
    const skip: number = this.pag.pageSize * page;

    this.isLoading = true;
    this.productsService.getPag(
      this.pag.filter,
      skip,
      this.pag.pageSize,
      this.handleError
    );
  }

  getCompleteImgPath(imgPath: string): string {
    return this.productsService.completeImgPath(imgPath);
  }

  onSearchProduct(filter: string) {
    this.pag.filter = filter;
    this.getProducts();
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
          if (confirm) {
            this.isLoading = true;

            this.productsService.del(product.id)
              .subscribe({
                next: (_) => {
                  this.isLoading = false;
                  this.snackBarService.open('Produto removido com sucesso');
                  this.getProducts();
                },
                error: this.handleError
              });
          }
        }
      });
  }
}
