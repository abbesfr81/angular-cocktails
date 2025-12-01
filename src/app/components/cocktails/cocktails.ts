import { Component, computed, effect, signal } from '@angular/core';
import { CocktailList } from './components/cocktail-list';
import { CocktailDetails } from './components/cocktail-details';
import { Cocktail } from '../../shared/interfaces';
import { cocktails } from '../../shared';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailList, CocktailDetails],
  template: `
    <app-cocktail-list
      (selectCocktail)="selectCocktail($event)"
      class="w-half card xs-w-full"
      [selectedCocktailName]="selectedCocktailName()"
      [cocktails]="cocktails()"
    />
    <app-cocktail-details [cocktail]="selectedCocktail()" class="w-half card xs-w-full" />
  `,
  styles: `
    
    :host {
      display: flex;
      flex-direction: row;
      padding: 24px;
      gap: 24px;
    }
    /* ensure children are two columns on desktop */
    :host > * {
      flex: 0 0 calc(50% - 12px);
      max-width: calc(50% - 12px);
    }

    /* switch to a single column on small screens */
    @media screen and (max-width: 820px) {
      :host {
        flex-direction: column;
      }
      :host > * {
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%;
      }
    }
  `,
})
export class Cocktails {
  cocktails = signal<Cocktail[]>(cocktails);
  selectedCocktail = signal<Cocktail>(this.cocktails()[0]);
  selectedCocktailName = computed(() => this.selectedCocktail().name);
  selectCocktail(cocktailName: string) {
    const newCocktail = this.cocktails().find(({ name }) => name === cocktailName);
    if (newCocktail) {
      this.selectedCocktail.set(newCocktail);
    }
  }

  constructor() {
    effect(() => {
      console.log('Cocktail sélectionné :', this.selectedCocktail());
    });
  }
}
