import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <h3 class="flex-auto text-bold text-lg">cocktails</h3>
    <ul>
      <li class="flex flex-row gap-16">
        <a href="#">liste des cocktails</a>
        <a href="#">Panier</a>
      </li>
    </ul>
  `,
  styles: `
  :host {
      display: flex;
      align-items: center;
      padding: 0 16px;
      background-color: var(--primary);
      color: white;
      height: 56px;
    }
  `,
})
export class Header {}
