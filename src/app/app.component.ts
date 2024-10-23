import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodInputComponent } from "./food-input/food-input.component";
import { HeaderComponent } from "./header/header.component";
import { FoodListComponent } from "./food-list/food-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodInputComponent, HeaderComponent, FoodListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OrderList';
}
