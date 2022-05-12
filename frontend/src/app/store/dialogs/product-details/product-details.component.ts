import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
