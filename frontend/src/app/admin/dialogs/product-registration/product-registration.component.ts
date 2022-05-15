import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Category, Product } from 'src/app/core/models';

import { remoteUrlToBase64 } from 'src/app/core/functions';

import {
  CategoriesService,
  DialogService,
  FormErrorsService,
  ProductsService,
  SnackBarService
} from 'src/app/core/services';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {
  @Input() product!: Product;

  categories: Category[];
  imgError: string;
  isLoading: boolean;
  productForm: FormGroup;
  title: string;

  constructor(
    private categoriesService: CategoriesService,
    private dialogService: DialogService,
    private formErrorsService: FormErrorsService,
    private productsService: ProductsService,
    private snackBarService: SnackBarService
  ) {
    this.categories = [];
    this.imgError = '';
    this.isLoading = false;
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(150)
      ]),
      base64_img: new FormControl('', [
        Validators.required
      ]),
      category_id: new FormControl('', [
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
      promotional_price: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      normal_price: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
    });
    this.title = '';
  }

  async ngOnInit(): Promise<void> {
    this.title = this.product ? 'Editar produto' : 'Adicionar produto';

    if (this.product) {
      this.productForm.patchValue({
        name: this.product.name,
        base64_img: await remoteUrlToBase64(this.getCompleteImgPath()),
        category_id: this.product.category_id,
        description: this.product.description,
        stock: this.product.stock,
        status: this.product.status,
        promotional_price: this.product.promotional_price,
        normal_price: this.product.normal_price,
      });
    }

    this.isLoading = true;
    this.categoriesService.getAll()
      .subscribe({
        next: (categories) => {
          this.isLoading = false;
          this.categories = categories;
        },
        error: this.handleError
      });
  }

  private handleError = (error: any) => {
    this.isLoading = false;
    this.snackBarService.open(
      error.error.message || error.message,
      'Fechar',
      true
    );
    console.error(error);
  }

  getCompleteImgPath(): string {
    if (!this.product) {
      return '';
    }

    return this.productsService.completeImgPath(this.product.img_path);
  }

  showInputError(inputName: string) {
    const errors = this.productForm.get(inputName)?.errors || {};

    return this.formErrorsService.getErrorMessage(errors);
  }

  onChangeImg(imgPath: string) {
    this.productForm.get('base64_img')?.setValue(imgPath);
    this.imgError = '';
  }

  onDelImg() {
    this.productForm.get('base64_img')?.setValue('');
    this.imgError = '';
  }

  onSubmit() {
    this.isLoading = true;

    if (!this.product) {
      this.productsService.add(this.productForm.value)
      .subscribe({
        next: (_) => {
          this.isLoading = false;
          this.dialogService.close();
          this.snackBarService.open('Produto adicionado com sucesso');
        },
        error: this.handleError
      });

      return;
    }

    this.productsService.update(this.product.id, this.productForm.value)
      .subscribe({
        next: (_) => {
          this.isLoading = false;
          this.dialogService.close();
          this.snackBarService.open('Produto atualizado com sucesso');
        },
        error: this.handleError
      });
  }
}
