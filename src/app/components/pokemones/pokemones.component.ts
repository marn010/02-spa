import { Component, OnInit } from '@angular/core';
import { PokemonesService, Pokemon} from '../../services/pokemones.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html'
})
export class PokemonesComponent implements OnInit {

  pokemones:Pokemon[] = [];

  constructor( private _pokemonesService:PokemonesService,
               private router:Router
                ) { }

  ngOnInit(): void {
    this.pokemones = this._pokemonesService.getPokemones();
    // console.log( this.pokemones );
  }

  verPokemon( idx:number ){
    this.router.navigate( ['/pokemon',idx] );

  }

}
