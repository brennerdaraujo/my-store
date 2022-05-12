import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { NgxMaskModule } from 'ngx-mask';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductRegistrationComponent } from './dialogs/product-registration/product-registration.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductRegistrationComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CoreModule,
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
  ],
  providers: []
})
export class AdminModule { }
