import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent {

  pokemon:any = {};

  constructor( private activateRoute:ActivatedRoute,
               private _pokemonesService: PokemonesService
               ) {

    this.activateRoute.params.subscribe( params =>{
      // console.log( params['id'] );
      this.pokemon = this._pokemonesService.getPokemon( params['id']);
    } );



   }

  

}
