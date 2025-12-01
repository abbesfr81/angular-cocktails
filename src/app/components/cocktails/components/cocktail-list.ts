import { Component, computed, input, output, signal } from '@angular/core';
import { Cocktail } from '../../../shared/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktail-list',
  imports: [FormsModule],
  template: `
    <h2 class="mb-20">Liste des cocktails</h2>
    <input
      [(ngModel)]="filter"
      type="text"
      class="mb-20 w-full"
      placeholder="Rechercher un cocktail..."
    />
    <ul class="mb-20">
      @for (cocktail of filteredCocktails(); track cocktail.name) { @let active = cocktail.name ===
      selectedCocktailName();
      <li
        (click)="selectCocktail.emit(cocktail.name)"
        class=" px-12 py-6 my-2 radius"
        [class.active-item]="active"
        [class.text-primary]="active"
      >
        <h3>{{ cocktail.name }}</h3>
      </li>

      }
    </ul>
    <button class="btn btn-primary">Ajouter un cocktail</button>
  `,
  styles: `
  li:hover {
      background-color: var(--light);
      cursor: pointer;
      transition: all 0.4s ease;
    }
  `,
})
export class CocktailList {
  filter = signal('');
  cocktails = input<Cocktail[]>();
  filteredCocktails = computed(() =>
    this.cocktails()?.filter(({ name }) => {
      return name.toLowerCase().includes(this.filter().toLowerCase());
    })
  );
  selectedCocktailName = input.required();
  selectCocktail = output<string>();
}
