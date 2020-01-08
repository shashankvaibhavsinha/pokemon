import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';

declare var $: any;
@Component({
  selector: 'pokemon-list-details',
  templateUrl: './pokemon-list-details.component.html',
  styleUrls: ['../app.component.css']
})
export class PokemonListDetailsComponent implements OnInit {
  url: any;
  constructor(private pokemonServices: PokemonServiceService) { }
  public response: any;
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
    this.url = localStorage.getItem('url');
    this.getPokemonDetails();
  }
  getPokemonDetails() {
    this.pokemonServices.getdetails(this.url).subscribe(
      res => {
        this.response = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
