import {Component, Input, OnInit} from '@angular/core';
import {ShowModel} from "../show.model";
import {Router} from "@angular/router";
import {RequestService} from "../request.service";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  shows: ShowModel[] = [];
  favorites = [];
  favStatus: boolean;
  requestToApi: Observable<any>;

  displayShows(Input){

    this.request.getShows(Input)
      .subscribe(result => {
        result.forEach( ({show}) => {

          this.favStatus = !!(localStorage.favorites && localStorage.favorites.includes(show.id));
          this.shows.push({
            name: show.name,
            id: show.id,
            image: show.image ? show.image.medium : '/assets/noimage.png',
            favorite: this.favStatus,
          });
        });
      });
  }

  displayFavorites(id){
    this.request.getDetails(id).subscribe(show => {
      this.shows.push({
        name: show.name,
        id: show.id,
        image: show.image ? show.image.medium : '/assets/noimage.png',
        favorite: true
      });
    });
  }

  makeStyle(favStat){

    return favStat ? 'url("/assets/sharp_star.png")' : 'url("/assets/sharp_star_border.png")';
  }

  Favorites(event, show){
    event.stopPropagation();
    if(!show.favorite){
      this.favorites.push(show.id);
    }
    if(show.favorite) {
      this.favorites.splice(this.favorites.indexOf(show.id),1);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    show.favorite = !show.favorite;

  }

  openDetails(id) {
    this.router.navigate([`/detail/${id}`]);
  }

  constructor(private router: Router,
              private request: RequestService) { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

}
