import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestService} from '../request.service';
import {ShowModel} from '../show.model';
import { Router} from '@angular/router';
import {ShowItemComponent} from '../show-item/show-item.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild ('ShowItemComponent') ShowItem: ShowItemComponent;
  searchInput: string;

  makeSearch() {
    this.sendToSession('inputval', this.searchInput);
    this.ShowItem.displayShows(this.searchInput);

  }

  //  makeStyle(favStat){
  //
  //   return favStat ? 'url("/assets/sharp_star.png")' : 'url("/assets/sharp_star_border.png")';
  // }
  //
  // Favorites(event, show){
  //   event.stopPropagation();
  //   if(!show.favorite){
  //     this.favorites.push(show.id);
  //   }
  //   if(show.favorite) {
  //     this.favorites.splice(this.favorites.indexOf(show.id),1);
  //   }
  //     localStorage.setItem('favorites', JSON.stringify(this.favorites));
  //   show.favorite = !show.favorite;
  //
  // }
  //
  // openDetails(id) {
  //   this.router.navigate([`/detail/${id}`]);
  // }

  sendToSession(key: string , value: string) {
    sessionStorage.setItem(key, value);
  }

  constructor(private request: RequestService,
              private router: Router) {}

  ngOnInit() {
    this.searchInput = sessionStorage.inputval;
    // this.favorites = JSON.parse(localStorage.getItem('favorites'));
    if (this.searchInput) {
      this.makeSearch();
    }
  }

}
