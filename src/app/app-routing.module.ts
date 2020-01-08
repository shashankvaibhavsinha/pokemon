import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListDetailsComponent } from './pokemon-list-details/pokemon-list-details.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent},
  {path: 'pokemon-details', component: PokemonListDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'pokemon'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
