import { Component } from '@angular/core';
import { FoodInputComponent } from '../food-input/food-input.component';


@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodInputComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

}
