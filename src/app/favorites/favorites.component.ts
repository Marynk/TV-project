import {Component, OnInit, ViewChild} from '@angular/core';
import {ShowModel} from '../show.model';
import {RequestService} from '../request.service';
import {Router} from '@angular/router';
import {ShowItemComponent} from '../show-item/show-item.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @ViewChild ('ShowItem') ShowItem: ShowItemComponent;

  favorites: number[] = [];

  initShows(favorites) {
    favorites.forEach(id => {
      this.ShowItem.displayFavorites(id);

    });
  }

  constructor(private request: RequestService,
              private router: Router) { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    if (this.favorites) {
      this.initShows(this.favorites);
    }

  }

}
