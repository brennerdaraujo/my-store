import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() label: string = 'Pesquisar';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  onSearchSomething(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.onSearch.emit(filter);
  }
}
