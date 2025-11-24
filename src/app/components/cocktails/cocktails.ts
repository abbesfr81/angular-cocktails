import { Component } from '@angular/core';
import { CocktailList } from './components/cocktail-list';
import { CocktailDetails } from './components/cocktail-details';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailList, CocktailDetails],
  template: `
    <app-cocktail-list class="w-half card" />
    <app-cocktail-details class="w-half card" />
  `,
  styles: `
  
    :host {
      display: flex;
      padding: 24px;
      gap: 24px;
    }
  `,
})
export class Cocktails {}
