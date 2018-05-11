import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RequestService} from '../request.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit {
  showInfo;
  id: number;

  constructor(private route: ActivatedRoute,
              private request: RequestService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(item =>  this.id = item['id']);

    this.request.getDetails(this.id)
      .subscribe(result => {
        this.showInfo = result;

        this.showInfo.image = this.showInfo.image ? this.showInfo.image.medium : '/assets/noimage.png';

      });
  }

  goBack() {
    this.location.back();
  }
}




