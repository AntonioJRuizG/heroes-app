import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styles: [],
})
export class NewItemPageComponent {
  public heroForm = new FormGroup({
    id: new FormControl(),
    superhero: new FormControl(),
    publisher: new FormControl(),
    alter_ego: new FormControl(),
    first_appearance: new FormControl(),
    characters: new FormControl(),
    optional_img: new FormControl(),
  });

  publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' },
  ];
}
