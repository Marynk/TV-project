import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ShowItemComponent} from '../show-item/show-item.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild ('ShowItemComponent') ShowItem: ShowItemComponent;
  searchInput: string;

  ngOnInit() {
    this.searchInput = sessionStorage.inputval;

  }

  ngAfterViewInit() {
    if (this.searchInput) {
      this.makeSearch();
    }
  }

  makeSearch() {
    this.sendToSession('inputval', this.searchInput);
    this.ShowItem.displayShows(this.searchInput);

  }

  sendToSession(key: string , value: string) {
    sessionStorage.setItem(key, value);
  }



}
