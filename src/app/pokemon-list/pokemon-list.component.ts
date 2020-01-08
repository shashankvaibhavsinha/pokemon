import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
declare var $: any;
@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['../app.component.css']
})
export class PokemonListComponent implements OnInit {
  public response: any;
  public name: any;
  public pokemonName: any;
  getListUrl: any;
  constructor(private pokemonServices: PokemonServiceService) { }
  ngOnInit() {
    $('.field-wrapper .field-placeholder').on('click', function() {
      $(this).closest('.field-wrapper').find('input').focus();
    });
    $('.field-wrapper input').on('keyup', function() {
      const value = $.trim($(this).val());
      if (value) {
          $(this).closest('.field-wrapper').addClass('hasValue');
      } else {
          $(this).closest('.field-wrapper').removeClass('hasValue');
      }
    });
    this.getListUrl = 'https://pokeapi.co/api/v2/pokemon/';
    this.getpokemon();
  }
  getpokemon() {
    this.pokemonServices.getall(this.getListUrl).subscribe(
      res => {
        this.name = res.results;
        this.response = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  pokemon(url: any) {
    localStorage.setItem('url', url);
  }
  previous() {
    if (this.response.previous !== null) {
      this.getListUrl = this.response.previous;
    }
    this.getpokemon();
  }
  next() {
    if (this.response.next !== null) {
      this.getListUrl = this.response.next;
    }
    this.getpokemon();
  }
}
