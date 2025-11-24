import { Component } from '@angular/core';
import { Cocktail } from '../../../shared/interfaces';

@Component({
  selector: 'app-cocktail-details',
  imports: [],
  template: `
    <img class="mb-20" [src]="cocktail.imageUrl" alt="{{ cocktail.name }}" />
    <h3 class="mb-20">{{ cocktail.name }}</h3>
    <p class="mb-20">{{ cocktail.description }}</p>
    <div>
      <button class="btn btn-primary">Ajouter cocktail</button>
    </div>
  `,
  styles: `
  :host {
      display: flex;
      flex-direction: column;
  }`,
})
export class CocktailDetails {
  cocktail = {};
}
