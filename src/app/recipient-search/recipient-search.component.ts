import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipient-search',
  templateUrl: './recipient-search.component.html',
  styleUrls: ['./recipient-search.component.css']
})
export class RecipientSearchComponent {

  @Output() searchString = new EventEmitter<string>();

  applyFilter(event: string) {
    this.searchString.emit(event);
  }
}
