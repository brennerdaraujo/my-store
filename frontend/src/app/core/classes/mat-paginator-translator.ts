import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorTranslator extends MatPaginatorIntl {
  override itemsPerPageLabel: string;
  override nextPageLabel: string;
  override previousPageLabel: string;
  override firstPageLabel: string;
  override lastPageLabel: string;

  constructor() {
    super();
    this.itemsPerPageLabel = '';
    this.nextPageLabel = '';
    this.previousPageLabel = '';
    this.firstPageLabel = '';
    this.lastPageLabel = '';
  }

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    this.getTranslations();
    const of = 'de';

    if (length === 0 || pageSize === 0) {
      return '0 ' + of + ' ' + length;
    }

    length = Math.max(length, 0);

    const startIndex = ((page * pageSize) > length)
      ? (Math.ceil(length / pageSize) - 1) * pageSize
      : page * pageSize;

    const endIndex = Math.min(startIndex + pageSize, length);

    return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
  };

  private getTranslations() {
    this.itemsPerPageLabel = 'Itens por página:';
    this.nextPageLabel = 'Próxima página';
    this.previousPageLabel = 'Página anterior';
    this.firstPageLabel = 'Primeira página';
    this.lastPageLabel = 'Última página';
  }
}
