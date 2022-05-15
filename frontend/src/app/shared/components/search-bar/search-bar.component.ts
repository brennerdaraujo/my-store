import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() label: string;
  @Output() onSearch: EventEmitter<string>;

  constructor() {
    this.label = 'Pesquisar';
    this.onSearch = new EventEmitter<string>();
  }

  onSearchSomething(filter: string) {
    this.onSearch.emit(filter);
  }

  onClearSearch(input: HTMLInputElement) {
    input.value = '';
    this.onSearchSomething('');
  }
}
