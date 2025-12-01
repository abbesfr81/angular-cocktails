import { Component } from '@angular/core';
import { HeaderMenu } from './components/header-menu';

@Component({
  selector: 'app-header',
  imports: [HeaderMenu],
  template: `
    <h3 class="flex-auto text-bold text-lg">cocktails</h3>
    <ul class="xs-hide flex flex-row gap-16">
      <li>
        <a href="#">liste des cocktails</a>
      </li>
      <li>
        <a href="#">Panier</a>
      </li>
    </ul>
    <app-header-menu class="xs-show"></app-header-menu>
  `,
  styles: `
  :host {
      position: relative;
      display: flex;
      align-items: center;
      background-color: var(--primary);
      color: white;
      height: 56px;
      padding: 0 16px;
    }
  `,
})
export class Header {}
