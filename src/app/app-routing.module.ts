import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { FavoritesComponent } from './components/views/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'detalle/:id', component: PokeDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '*', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
