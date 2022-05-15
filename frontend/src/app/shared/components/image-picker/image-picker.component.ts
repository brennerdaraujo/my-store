import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { imageMaxSizeMb, notFoundImgPath } from 'src/app/core/consts';

import { fileToBase64 } from 'src/app/core/functions';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.css']
})
export class ImagePickerComponent implements OnInit {
  @Input() errorOccurred: boolean;
  @Input() imgPath: SafeResourceUrl;
  @Output() onChangeImg: EventEmitter<string>;
  @Output() onDelImg: EventEmitter<void>;
  @Output() onErrorImg: EventEmitter<string>;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.errorOccurred = false;
    this.onChangeImg = new EventEmitter<string>();
    this.onDelImg = new EventEmitter<void>();
    this.onErrorImg = new EventEmitter<string>();

    this.imgPath = notFoundImgPath;
  }

  ngOnInit() {
    if (!this.imgPath)
      this.imgPath = notFoundImgPath;
  }

  isImgNotFound(): boolean {
    return this.imgPath === notFoundImgPath;
  }

  onDelImgClick() {
    this.imgPath = notFoundImgPath;
    this.onDelImg.next();
  }

  async onChangeImage(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length) {
      const file = files[0];

      if (file.type.split('/')[0] !== 'image') {
        this.imgPath = notFoundImgPath;
        this.errorOccurred = true;
        this.onErrorImg.next('Arquivo deve ser uma imagem');
        return;
      }

      const imgSizeMb = file.size / 1024 / 1024;

      if (imgSizeMb > imageMaxSizeMb) {
        this.imgPath = notFoundImgPath;
        this.errorOccurred = true;
        this.onErrorImg.next(`Imagem não pode ser maior que ${imageMaxSizeMb}Mb`);
        return;
      }

      const base64Img = await fileToBase64(file);

      this.imgPath = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
      this.onChangeImg.next(`${base64Img}`);
    }
  }
}
