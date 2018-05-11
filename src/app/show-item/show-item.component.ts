import {Component, Input, OnInit} from '@angular/core';
import {ShowModel} from "../show.model";
import {Router} from "@angular/router";
import {RequestService} from "../request.service";
// import {Observable} from 'rxjs/Observable';
import {map, switchMap} from "rxjs/operators";
import {from} from "rxjs/observable/from";

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  shows: ShowModel[] = [];
  favorites: number[] = [];
  favStatus: boolean;

  constructor(private router: Router,
              private request: RequestService) { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  displayShows(input: string){
    this.request.getShows(input)
      .pipe(
        switchMap((item: any) => from(item)),
        map(({show})=> show)
      )
      .subscribe(({name, id, image}) => {
        this.favStatus = !!(localStorage.favorites && localStorage.favorites.includes(id));
        this.shows.push({
          name: name,
          id: id,
          image: image ? image.medium : '/assets/noimage.png',
          favorite: this.favStatus,
        });
      });
  }

  displayFavorites(id: number) {
    this.request.getDetails(id)
      .subscribe(show => {
        this.shows.push({
          name: show.name,
          id: show.id,
          image: show.image ? show.image.medium : '/assets/noimage.png',
          favorite: true
        });
      });
  }

  makeStyle(favStat: boolean) {
    return favStat ? 'url("/assets/sharp_star.png")' : 'url("/assets/sharp_star_border.png")';
  }

  makeFavorites(event: MouseEvent, show: ShowModel) {
    event.stopPropagation();
    if (!show.favorite) {
      this.favorites.push(show.id);
    }
    else {
      this.favorites.splice(this.favorites.indexOf(show.id), 1);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    show.favorite = !show.favorite;

  }

  openDetails(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }


}
