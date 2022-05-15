import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorTranslator } from './classes/mat-paginator-translator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {
  CategoriesService,
  DialogService,
  FormErrorsService,
  ProductsService,
  SnackBarService
} from './services';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [],
  providers: [
    CategoriesService,
    DialogService,
    FormErrorsService,
    ProductsService,
    SnackBarService,
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorTranslator
    }
  ]
})
export class CoreModule { }
