import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ShowItemComponent} from '../show-item/show-item.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements AfterViewInit {
  @ViewChild ('ShowItem') ShowItem: ShowItemComponent;
  favorites: number[] = [];

  ngAfterViewInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    if (this.favorites) {
      this.initShows(this.favorites);
    }
  }

  initShows(favorites: number[]) {
    favorites.forEach(id => {
      this.ShowItem.displayFavorites(id);
    });
  }
}
