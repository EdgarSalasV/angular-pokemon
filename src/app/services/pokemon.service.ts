import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import Pokemon, { LocalPokemon } from '../interfaces/Pokemon';

const LOCAL_STORAGE_KEY = 'pokemons-favorites';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = environment.baseUrl;
  public pokemos: LocalPokemon[] = [];

  constructor(private http: HttpClient) {}
  
  getPokemonApi(index: number) {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${index}`);
  }

  saveLocalPokemos(pokemos: LocalPokemon[]) {
    this.pokemos = pokemos;
  }

  getFavoritesPokemons() {
    const pokemons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') as LocalPokemon[];
    return pokemons;
  }

  getFavoritesPokemonsIds() {
    const pokemons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') as LocalPokemon[];
    return pokemons.map(({ id }) => id);
  }

  saveFavorityPokemon(pokemon: LocalPokemon) {
    const pokemons = this.getFavoritesPokemons();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...pokemons, pokemon]));
  }

  removeFavorityPokemon(pokemon: LocalPokemon) {
    const pokemons = this.getFavoritesPokemons();
    const newPokemons = pokemons.filter(({ id }) => id !== pokemon.id)
  
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPokemons));
  }
}
