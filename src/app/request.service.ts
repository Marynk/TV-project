import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {

  getShows(name): Observable<any>{
    return this.http.get(`http://api.tvmaze.com/search/shows?q=${name}`);
  }

  getDetails(id): Observable<any>{
    return this.http.get(`http://api.tvmaze.com/shows/${id}`);
  }



  constructor( private http: HttpClient) { }

}
