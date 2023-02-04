import { Component } from '@angular/core';

import { Pokemon } from 'src/app/Pokemon';

import { ChoosePokemonService } from 'src/app/services/choose-pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class Pokemons {
  pokemons = [
    {img: "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png", name: "Charmander", type: "Fire", atack: "Blaze | Solar Power"},
    {img: "https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/250px-0007Squirtle.png", name: "Squirtle", type: "Water", atack: "Torrent | Rain Dish"},
    {img: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png", name: "Bulbasaur", type: "Grass | Poison", atack: "Overgrow | Chlorophyll"},
    ]

    constructor(private choosePokemonService: ChoosePokemonService){}

    choosePokemon(pokemon: Pokemon){
      console.log(`Escolhendo pokemon: ${pokemon.name}`);
      this.pokemons = this.choosePokemonService.choose(this.pokemons, pokemon);
    }

}