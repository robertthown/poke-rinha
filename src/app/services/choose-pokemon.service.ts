import { Injectable } from '@angular/core';
import { Pokemons } from '../components/pokemons/pokemons.component';
import { Pokemon } from '../Pokemon';

@Injectable({
  providedIn: 'root'
})
export class ChoosePokemonService {

  constructor() { }

  choose(pokemons: Pokemon[], pokemon: Pokemon){
    // console.log("Ativando service");
    return pokemons.filter((a) => pokemon.name == a.name);
  }
}
