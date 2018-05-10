import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {ShowInfoComponent} from "./show-info/show-info.component";
import {FavoritesComponent} from "./favorites/favorites.component";

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'detail/:id', component: ShowInfoComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}

];

@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
