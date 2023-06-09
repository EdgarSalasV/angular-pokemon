export default interface Pokemon {
  id: number;
  sprites: Sprites;
  height: number;
  name: string;
  weight: number;
  types: Type[];
}

export interface LocalPokemon {
  id: number;
  image: string;
  height: number;
  name: string;
  weight: number;
  type: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  animated?: Sprites;
}
