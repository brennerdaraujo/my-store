import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(
    private snackBar: MatSnackBar
  ) {}

  open(
    message: string,
    action: string = 'Fechar',
    error: boolean = false
  ) {
    return this.snackBar.open(
      message,
      action,
      {
        panelClass: error ? 'snack-bar-error' : 'snack-bar-success'
      }
    );
  }
}
