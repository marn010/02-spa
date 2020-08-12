import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  pokemones:any[]=[]
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _pokemonesService: PokemonesService) { 
      
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
      this.termino=params['termino'];
      this.pokemones = this._pokemonesService.buscarPokemones( params['termino'] );
      console.log(this.pokemones);
    });
  }

}
