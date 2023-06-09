import { Router } from '@angular/router';
import Pokemon from 'src/app/interfaces/Pokemon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-favorites-table',
  templateUrl: './poke-favorites-table.component.html',
  styleUrls: ['./poke-favorites-table.component.scss']
})
export class PokeFavoritesTableComponent implements OnInit {
  private pokemonList: any[] = [];

  public displayedColumns: string[] = ['id', 'image', 'name', 'type'];
  public dataSource = new MatTableDataSource<any>(this.pokemonList);

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonList = this.pokeService.getFavoritesPokemons();

    this.dataSource = new MatTableDataSource<Pokemon>(
      this.pokemonList.sort((a, b) => a.id - b.id)
    );

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
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
