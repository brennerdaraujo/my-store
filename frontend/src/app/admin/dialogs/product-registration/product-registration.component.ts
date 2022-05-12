import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { notFoundImgPath } from 'src/app/core/consts';

import { Category, Product } from 'src/app/core/models';

import { FormErrorsService } from 'src/app/core/services';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {
  @Input() product: Product | null = null;

  title: string = '';
  imgPath: SafeResourceUrl = notFoundImgPath;
  categories: Category[] = [];

  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(150)
    ]),
    img: new FormControl('', [
      Validators.required
    ]),
    categoryId: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(2000)
    ]),
    stock: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
    status: new FormControl(true, [
      Validators.required
    ]),
    promotionalPrice: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
    normalPrice: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
  });

  constructor(
    private formErrorsService: FormErrorsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.title = this.product ? 'Editar produto' : 'Adicionar produto';

    if (this.product) {
      this.imgPath = this.product.imgPath;
      this.productForm.patchValue({
        name: this.product.name,
        categoryId: this.product.category.id,
        description: this.product.description,
        stock: this.product.stock,
        status: this.product.status,
        promotionalPrice: this.product.price.promotional,
        normalPrice: this.product.price.normal,
      });
    }
  }

  isImgNotFound(): boolean {
    return this.imgPath === notFoundImgPath;
  }

  showInputError(inputName: string) {
    const errors = this.productForm.get(inputName)?.errors || {};

    return this.formErrorsService.getErrorMessage(errors);
  }

  onSubmit() {

  }

  onChangeImg(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length) {
      const file = files[0];
      this.imgPath = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
    }
  }

  onDelImgClick() {
    this.imgPath = notFoundImgPath;
  }
}
