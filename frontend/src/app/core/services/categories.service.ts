import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = environment.api.url;

  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get<Category[]>(`${this.apiUrl}/admin/categories`);
  }
}
