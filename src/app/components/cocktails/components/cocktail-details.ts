import { Component, input } from '@angular/core';
import { Cocktail } from '../../../shared/interfaces';

@Component({
  selector: 'app-cocktail-details',
  imports: [],
  template: `
    @let c = cocktail();
    <div>
      <img class="mb-20" [src]="c.imageUrl" alt="{{ cocktail().name }}" />
    </div>
    <h3 class="mb-20">{{ c.name }}</h3>
    <p class="mb-20">{{ c.description }}</p>

    <div class="mb-20">
      <h4>Ingrédients</h4>
      <ul>
        @for (ingredient of c.ingredients; track $index) {
        <li class="my-2">{{ ingredient }}</li>
        }
      </ul>
    </div>

    <div>
      <button class="btn btn-primary">Ajouter cocktail</button>
    </div>
  `,
  styles: `
  :host {
      display: flex;
      flex-direction: column;
  }
  img {
    max-height: 300px;
  }
  ul {
    padding-left: 20px;
    list-style: disc;
    font-size: 14px;
    font-weight: 500;
  }
  `,
})
export class CocktailDetails {
  cocktail = input.required<Cocktail>();
}
