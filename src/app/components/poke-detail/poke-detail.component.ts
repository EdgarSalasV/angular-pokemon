import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import Pokemon, { LocalPokemon } from 'src/app/interfaces/Pokemon';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  public pokemon!: LocalPokemon;
  public isFavority: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe((params) => {
      this.getPokemon(params['id']);
    });
  }

  getPokemon(id: number) {
    this.pokemonService.getPokemonApi(id).subscribe({
      next: (res) => {
        const pokemonSelected: LocalPokemon = {
          id: res.id,
          weight: res.weight,
          height: res.height,
          image: res.sprites.front_default,
          name: res.name,
          type: res.types[0].type.name,
        }

        this.pokemon = pokemonSelected;

        const favorites = this.pokemonService.getFavoritesPokemons();
        const isFavority = favorites.find(({ id }) => id === pokemonSelected.id);

        if (isFavority) this.isFavority = true;
      }
    });
  }

  ngOnInit(): void {
    
  }

  saveFavorityPokemon() {
    this.pokemonService.saveFavorityPokemon(this.pokemon);
    this.isFavority = true;
  }

  removeFavorityPokemon() {
    this.pokemonService.removeFavorityPokemon(this.pokemon);
    this.isFavority = false;
  }

}
