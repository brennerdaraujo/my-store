import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import {
  CounterInputComponent,
  HeaderComponent,
  ImagePickerComponent,
  LoaderComponent,
  SearchBarComponent
} from './components';

import { ConfirmComponent } from './dialogs';

@NgModule({
  declarations: [
    ConfirmComponent,
    CounterInputComponent,
    HeaderComponent,
    LoaderComponent,
    SearchBarComponent,
    ImagePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  exports: [
    ConfirmComponent,
    CounterInputComponent,
    HeaderComponent,
    ImagePickerComponent,
    LoaderComponent,
    SearchBarComponent,
  ]
})
export class SharedModule { }
