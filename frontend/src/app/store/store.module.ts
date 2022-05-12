import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './dialogs/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    StoreRoutingModule,
    SharedModule,
    CoreModule,
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: []
})
export class StoreModule { }
