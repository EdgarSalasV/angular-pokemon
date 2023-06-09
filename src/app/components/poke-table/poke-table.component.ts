import { Router } from '@angular/router';
import Pokemon, { LocalPokemon } from 'src/app/interfaces/Pokemon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss'],
})
export class PokeTableComponent implements OnInit {
  private pokemonList: LocalPokemon[] = [];

  public pokemonFavoritesIds: number[] = []
  public displayedColumns: string[] = ['id', 'image', 'name', 'type'];
  public dataSource = new MatTableDataSource<LocalPokemon>(this.pokemonList);

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonFavoritesIds = this.pokeService.getFavoritesPokemonsIds()
    this.getPokemons();
  }

  getPokemons() {
    const localPokemons = this.pokeService.pokemos;

    if (localPokemons.length > 0) {
      console.log(localPokemons);
      this.pokemonList = localPokemons;

      this.dataSource = new MatTableDataSource<LocalPokemon>(
        this.pokemonList.sort((a, b) => a.id - b.id)
      );

      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }

      return;
    }


    for (let id = 1; id <= 1000; id++) {
      this.pokeService.getPokemonApi(id).subscribe({
        next: (value) => {
          const newPokemon: LocalPokemon = {
            id,
            image: value.sprites.front_default,
            type: value.types[0].type.name,
            name: value.name,
            height: value.height,
            weight: value.weight,
          };

          this.pokemonList.push(newPokemon);

          this.dataSource = new MatTableDataSource<LocalPokemon>(
            this.pokemonList.sort((a, b) => a.id - b.id)
          );

          this.pokeService.saveLocalPokemos(this.pokemonList);

          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
        },
        error: (error) => {
          console.error(error.mesesage);
        },
      });
    }
  }

  getPokemonsByNameAndId(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToPokemonDetail(row: any) {
    this.router.navigateByUrl(`detalle/${row.id}`);
  }
}
