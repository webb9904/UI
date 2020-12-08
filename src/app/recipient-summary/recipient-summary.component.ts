import { Component } from '@angular/core';
import { UserData } from '../user-data';

@Component({
  selector: 'app-recipient-summary',
  templateUrl: './recipient-summary.component.html',
  styleUrls: ['./recipient-summary.component.css']
})
export class RecipientSummaryComponent {

  summary: UserData[] = [];
  searchString: string = '';

  public AddUserData() {
    this.summary = [
      ...this.summary, 
      {id: '1', name: 'Dan', progress: '50', color: 'Green'},
      {id: '2', name: 'Vic', progress: '50', color: 'Red'}
    ];
  }

  applyFilter(event: string) {
    this.searchString = event;
  }
}
