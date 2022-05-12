import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService, FormErrorsService, ProductsService } from './services';

@NgModule({
  declarations: [],
  imports: [
    MatDialogModule
  ],
  exports: [],
  providers: [
    DialogService,
    FormErrorsService,
    ProductsService
  ]
})
export class CoreModule { }
