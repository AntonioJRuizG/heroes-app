import { Component } from '@angular/core';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styles: [],
})
export class NewItemPageComponent {
  publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' },
  ];
}
