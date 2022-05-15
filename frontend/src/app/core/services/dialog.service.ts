import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogRef: MatDialogRef<any> | null = null;

  constructor(
    public dialog: MatDialog
  ) {}

  open(dialog: ComponentType<any>, data?: any) {
    this.dialogRef = this.dialog.open(dialog, {
      data,
      disableClose: true
    });

    return this.dialogRef;
  }

  close() {
    this.dialogRef?.close(true);
  }

  afterClosed(): Observable<any> {
    if (this.dialogRef)
      return this.dialogRef.afterClosed();

    return new Observable();
  }
}
