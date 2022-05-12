import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    ConfirmComponent,
    CounterInputComponent
  ],
  imports: [
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    ConfirmComponent,
    CounterInputComponent
  ],
  providers: []
})
export class SharedModule { }
