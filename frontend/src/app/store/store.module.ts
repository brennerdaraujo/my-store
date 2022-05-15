import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';

import { ProductCardComponent } from './components';

import { ProductDetailsComponent } from './dialogs';

import { ProductsListComponent } from './pages';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    SharedModule,
    StoreRoutingModule,
  ]
})
export class StoreModule { }
