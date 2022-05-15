import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() buttons: {
    label: string;
    icon?: string;
    onClick: Function;
  }[];
  @Input() showLogo: boolean;
  @Input() title: string;

  constructor() {
    this.buttons = [];
    this.showLogo = false;
    this.title = '';
  }
}
