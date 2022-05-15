import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { pagination } from 'src/app/core/consts';

import { Product } from 'src/app/core/models';

import { ProductsService, SnackBarService } from 'src/app/core/services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  adminButton: {
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
  products: Product[];

  private productsSub: Subscription;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {
    this.adminButton = {
      label: 'Admin',
      icon: 'lock',
      onClick: () => this.router.navigate(['admin'])
    };
    this.isLoading = false;
    this.pag = {
      filter: '',
      length: 0,
      pageSize: pagination.limit,
    };
    this.products = [];
    this.productsSub = new Subscription();
  }

  ngOnInit(): void {
    this.getProducts();

    this.productsSub = this.productsService.getUpdateListener()
      .subscribe({
        next: (value) => {
          this.products = value.products;
          this.pag.length = value.total;
          this.isLoading = false;
        },
        error: this.handleError
      });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }

  private handleError = (error:any) => {
    this.isLoading = false;
    this.snackBarService.open(
      error.error.message || error.message,
      'Fechar',
      true
    );
    console.error(error);
  };

  getProducts(pageEvent?: PageEvent) {
    const page: number = pageEvent ? pageEvent.pageIndex : 0;
    const skip: number = this.pag.pageSize * page;

    this.isLoading = true;
    this.productsService.getAvailablePag(
      this.pag.filter,
      skip,
      this.pag.pageSize,
      this.handleError
    );
  }
}
