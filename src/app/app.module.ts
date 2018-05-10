import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RequestService } from './request.service';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import { ShowInfoComponent } from './show-info/show-info.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ShowItemComponent } from './show-item/show-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowInfoComponent,
    FavoritesComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
