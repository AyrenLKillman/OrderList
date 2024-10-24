import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodInputComponent } from "./food-input/food-input.component";
import { HeaderComponent } from "./header/header.component";
import { FoodListComponent } from "./food-list/food-list.component";
import { ListoptionzComponent } from "./listoptionz/listoptionz.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodInputComponent, HeaderComponent, FoodListComponent, ListoptionzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OrderList';
}
