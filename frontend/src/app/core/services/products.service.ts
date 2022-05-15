import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { pagination } from 'src/app/core/consts';

import { Product } from '../models/product';

interface IGetProducts {
  total: number;
  products: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUpdated = new Subject<IGetProducts>();
  private apiUrl = environment.api.url;

  constructor(
    private http: HttpClient
  ) {}

  completeImgPath(imgPath: string) {
    return `${this.apiUrl}/${imgPath}`;
  }

  getPag(
    filter: string = '',
    skip: number = pagination.skip,
    limit: number = pagination.limit,
    onError?: Function
  ) {
    this.http.get<IGetProducts>(
      `${this.apiUrl}/admin/products?skip=${skip}&limit=${limit}&filter=${filter}`
    )
      .subscribe({
        next: (result) => this.productsUpdated.next(result),
        error: (error) => onError && onError(error)
      })
  }

  getAvailablePag(
    filter: string = '',
    skip: number = pagination.skip,
    limit: number = pagination.limit,
    onError?: Function
  ) {
    this.http.get<IGetProducts>(
      `${this.apiUrl}/products?skip=${skip}&limit=${limit}&filter=${filter}`
    )
      .subscribe({
        next: (result) => this.productsUpdated.next(result),
        error: (error) => onError && onError(error)
      });
  }

  getUpdateListener() {
    return this.productsUpdated.asObservable();
  }

  add(form: any) {
    return this.http.post<Product>(`${this.apiUrl}/admin/products`, form);
  }

  update(id: string, form: any) {
    return this.http.put<void>(`${this.apiUrl}/admin/products/${id}`, form);
  }

  del(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/admin/products/${id}`);
  }
}
